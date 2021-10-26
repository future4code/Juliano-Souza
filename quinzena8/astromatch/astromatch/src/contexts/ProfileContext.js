import axios from 'axios'
import { useState, useEffect, createContext } from 'react'
import { URL_BASE } from '../constants/urls'

export const ProfileContext = createContext()

export function ProfileContextProvider({children}) {

    const [profile, setProfile] = useState({})
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)
    const [toast, setToast] = useState(0)

    const getProfile = () => {
        axios.get(`${URL_BASE}/person`)
        .then(res => {
            setProfile(res.data.profile)
            setLoading(false)
        })
        .catch(() => {
            setToast(1)
            setTimeout(() => {
                setToast(0)
            }, 2500)
            setLoading(false)
        })
    }

    useEffect(() => {
        getProfile()
    }, [])

    const choosePerson = (id, choice) => {
        setLoading(true)
        const BODY = {
          id: id,
            choice: choice
        }
        axios.post(`${URL_BASE}/choose-person`, BODY)
        .then((res) => {
            getProfile()
            if (res.data.isMatch) {
                setToast(2)
            }
            setLoading(true)
            setTimeout(() => {
                setToast(0)
            }, 2500)
        })
        .catch(() => {
            setToast(1)
            setTimeout(() => {
                setToast(0)
            }, 2500)
            setLoading(false)
        })
    }

    const getMatches = () => {
        axios.get(`${URL_BASE}/matches`)
        .then(res => {
            setMatches(res.data.matches)
            setLoading(false)
        })
        .catch(() => {
            setToast(1)
            setTimeout(() => {
                setToast(0)
            }, 2500)
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

            if (profile) {
                setLoading(false)
            }
            
        } catch(error) {
            setToast(1)
            setTimeout(() => {
                setToast(0)
            }, 2500)
            setLoading(false)
        }
    }

    return (
        <ProfileContext.Provider value={{profile, matches, choosePerson, handleClear, getProfile, getMatches, loading, setLoading, toast}}>
            {children}
        </ProfileContext.Provider>
    )

}