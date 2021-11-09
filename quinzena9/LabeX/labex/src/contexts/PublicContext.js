import { createContext } from 'react'
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls";

export const PublicContext = createContext()

export function PublicContextProvider({children}) {

    const trips = useRequestData(BASE_URL, 'get', '/trips')

    return (
        <PublicContext.Provider value={{trips}}>
            {children}
        </PublicContext.Provider>
    )
}