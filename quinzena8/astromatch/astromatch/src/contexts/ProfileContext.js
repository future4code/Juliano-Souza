import axios from 'axios'
import { useState, useEffect, createContext } from 'react'
import { URL_BASE } from '../constants/urls'

export const ProfileContext = createContext()

export function ProfileContextProvider({children}) {

    const [profile, setProfile] = useState({})
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)

    const getProfile = () => {
        axios.get(`${URL_BASE}/person`)
        .then(res => {
            setProfile(res.data.profile)
            setLoading(false)
        })
        .catch(rej => {
            console.log(rej)
            setLoading(false)
        })
    }

    useEffect(() => {
        getProfile()
    }, [])

    const choosePerson = (id, choice) => {
        const BODY = {
          id: id,
            choice: choice
        }
        axios.post(`${URL_BASE}/choose-person`, BODY).then(() => getProfile()).catch(() => window.alert('Error'))
    }

    const getMatches = () => {
        axios.get(`${URL_BASE}/matches`)
        .then(res => {
            setMatches(res.data.matches)
            setLoading(false)
        })
        .catch(rej => {
            console.log(rej)
            setLoading(false)
        })
    }

    const handleClear = async () => {
        setLoading(true)
        try {
            await axios.put(`${URL_BASE}/clear`)

            if (!profile) {
                getProfile()
            }

            if (matches) {
                setMatches([])
            }
            
            setLoading(false)

        } catch(error) {
            console.log(error.res)
            setLoading(false)
        }
    }

    return (
        <ProfileContext.Provider value={{profile, matches, choosePerson, handleClear, getProfile, getMatches, loading, setLoading}}>
            {children}
        </ProfileContext.Provider>
    )

}