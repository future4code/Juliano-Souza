import { useState, useEffect } from 'react'

export function useVerifyToken() {

    const [token, setToken] = useState('')

    let tokenAcess = localStorage.getItem('Token')

    useEffect(() => {

        setToken(tokenAcess)
        console.log('Rodei', tokenAcess)    

    }, [])

    return token
}