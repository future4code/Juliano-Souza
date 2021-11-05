import { createContext } from 'react'
import { useRequestData } from "../hooks/useRequestData";

export const PublicContext = createContext()

export function PublicContextProvider({children}) {

    const trips = useRequestData('get', '/trips')

    return (
        <PublicContext.Provider value={{trips}}>
            {children}
        </PublicContext.Provider>
    )
}