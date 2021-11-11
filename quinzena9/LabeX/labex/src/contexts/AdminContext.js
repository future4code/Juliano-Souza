import { createContext, useState } from 'react'

export const AdminContext = createContext()
    

export function AdminContextProvider({children}) {

    const [newTripValues, setNewTripValues] = useState({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: '',
    })

    return (
        <AdminContext.Provider value={{ newTripValues, setNewTripValues }}>
            {children}
        </AdminContext.Provider>
    )
}