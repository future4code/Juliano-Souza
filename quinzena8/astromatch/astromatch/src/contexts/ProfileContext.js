import axios from 'axios'
import { useState, useEffect, createContext } from 'react'
import { URL_BASE } from '../constants/urls'

export const ProfileContext = createContext()

export function ProfileContextProvider({children}) {

    const [profile, setProfile] = useState({})
    const [matches, setMatches] = useState([])

    const getProfile = () => {
        axios.get(`${URL_BASE}/person`).then(res => setProfile({...res.data.profile, available: false})).catch(rej => console.log(rej))
    }

    // console.log(profile)

    useEffect(() => {
        getProfile()
    }, [])

    const choosePerson = (id) => {
        const BODY = {
          id: id,
            choice: true
        }
        axios.post(`${URL_BASE}/choose-person`, BODY).then(() => getProfile()).catch(() => window.alert('Error'))
    }

    const getMatches = () => {
        axios.get(`${URL_BASE}/matches`).then(res => setMatches(res.data.matches)).catch(rej => console.log(rej))
    }

    const handleClear = () => {
        axios.put(`${URL_BASE}/clear`).then(() => getProfile()).catch(rej => console.log(rej))
    }

    return (
        <ProfileContext.Provider value={{profile, matches, choosePerson, handleClear, getProfile, getMatches}}>
            {children}
        </ProfileContext.Provider>
    )

}