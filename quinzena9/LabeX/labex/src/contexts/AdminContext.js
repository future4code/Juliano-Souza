import { createContext, useState } from 'react'
import { useRequestData } from '../hooks/useRequestData'

export const AdminContext = createContext()
    

export function AdminContextProvider({children}) {



    let token = localStorage.getItem('Token')

    const [loading, setLoading] = useState(true)

    const [menuIsOpen, setMenuIsOpen] = useState({
        tripDetails: true,
        candidates: true,
        approved: true
    })

    const [newTripValues, setNewTripValues] = useState({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: '',
    })

    return (
        <AdminContext.Provider value={{ newTripValues, setNewTripValues, token, menuIsOpen, setMenuIsOpen, loading, setLoading, useRequestData }}>
            {children}
        </AdminContext.Provider>
    )
}