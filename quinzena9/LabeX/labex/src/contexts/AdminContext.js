import { createContext, useState } from 'react'

export const AdminContext = createContext()
    

export function AdminContextProvider({children}) {

    let token = localStorage.getItem('Token')

    const [newTripValues, setNewTripValues] = useState({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: '',
    })

    return (
        <AdminContext.Provider value={{ newTripValues, setNewTripValues, token }}>
            {children}
        </AdminContext.Provider>
    )
}