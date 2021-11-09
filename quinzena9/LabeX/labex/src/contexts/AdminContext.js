import { createContext, useEffect, useState } from 'react'

export const AdminContext = createContext()
    

export function AdminContextProvider({children}) {

    const token = localStorage.getItem('Token')

    const [newTripValues, setNewTripValues] = useState({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: '',
    })

    return (
        <AdminContext.Provider value={{ token, newTripValues, setNewTripValues }}>
            {children}
        </AdminContext.Provider>
    )
}