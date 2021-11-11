import { createContext, useState } from 'react'

export const AdminContext = createContext()
    

export function AdminContextProvider({children}) {

    let token = localStorage.getItem('Token')

    const [menuIsOpen, setMenuIsOpen] = useState({
        tripDetails: false,
        candidates: false,
        approved: false
    })

    const [newTripValues, setNewTripValues] = useState({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: '',
    })

    return (
        <AdminContext.Provider value={{ newTripValues, setNewTripValues, token, menuIsOpen, setMenuIsOpen }}>
            {children}
        </AdminContext.Provider>
    )
}