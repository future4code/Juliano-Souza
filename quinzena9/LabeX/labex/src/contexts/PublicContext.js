import { createContext, useState } from 'react'
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls";

export const PublicContext = createContext()

export function PublicContextProvider({children}) {

    const trips = useRequestData(BASE_URL, 'get', '/trips')

    const [formValues, setFormValues] = useState({
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: '',
    })
    const [loginValues, setLoginValues] = useState({
        email: '',
        password: ''
    })
    const [ tripName, setTripName ] = useState('')

    const [ tripId, setTripId ] = useState('')

    return (
        <PublicContext.Provider value={{trips, formValues, setFormValues, loginValues, setLoginValues, tripName, setTripName, tripId, setTripId}}>
            {children}
        </PublicContext.Provider>
    )
}