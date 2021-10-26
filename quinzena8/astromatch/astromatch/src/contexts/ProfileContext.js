import axios from 'axios'
import { useState, useEffect, createContext } from 'react'
import { URL_BASE } from '../constants/urls'

export const ProfileContext = createContext()

export function ProfileContextProvider({children}) {

    const [profile, setProfile] = useState({})
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)
    const [toast, setToast] = useState(0)

    const handleToast = (res) => {
        // console.log(res)
        if (res) {
            setToast(2)
            setTimeout(() => {
                setToast(0)
            }, 2500)
        }

        if (res === 1) {
            setToast(1)
            setTimeout(() => {
                setToast(0)
                setLoading(false)
            }, 2500)
        }

        if (res === 3) {
            setToast(3)
            setTimeout(() => {
                setToast(0)
                setLoading(false)
            }, 2500)
        }
    }

    const getProfile = () => {
        axios.get(`${URL_BASE}/person`)
        .then(res => {
            setProfile(res.data.profile)
            setLoading(false)
        })
        .catch(() => {
            handleToast(1)
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
            handleToast(res.data.isMatch)
        })
        .catch(() => {
            handleToast(1)
        })
    }

    const getMatches = () => {
        axios.get(`${URL_BASE}/matches`)
        .then(res => {
            setMatches(res.data.matches)
            setLoading(false)
        })
        .catch(() => {
            handleToast(1)
        })
    }

    const handleClear = async () => {
        setLoading(true)
        try {
            await axios.put(`${URL_BASE}/clear`)

            handleToast(3)

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
            handleToast(1)
        }
    }

    return (
        <ProfileContext.Provider value={{profile, matches, choosePerson, handleClear, getProfile, getMatches, loading, setLoading, toast}}>
            {children}
        </ProfileContext.Provider>
    )

}