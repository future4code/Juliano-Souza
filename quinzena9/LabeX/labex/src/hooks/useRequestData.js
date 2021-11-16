import axios from "axios";
import { useState, useEffect, useContext } from 'react'

import { AdminContext } from '../contexts/AdminContext'

export function useRequestData(BASE_URL, method, endpoint, body, token) {

    const [data, setData] = useState([])

    const { setLoading } = useContext(AdminContext)

    useEffect(() => {
        
        if (!body && !endpoint) {
            setLoading(true)
            axios[method](`${BASE_URL}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(() => window.alert('Erro em nossos servidores...'))

        } else if (!body && !token) {
            setLoading(true)
            axios[method](`${BASE_URL}${endpoint}`)
            .then(res => {
                setData(res.data.trips)
                setLoading(false)
            })
            .catch(() => window.alert('Erro em nossos servidores...'))

        } else if (!body && token){
            setLoading(true)
            const auth = {headers: {auth: token}}

            axios[method](`${BASE_URL}${endpoint}`, auth)
            .then(res => {
                setData(res.data.trip)
                setLoading(false)
            })
            .catch(() => window.alert('Erro em nossos servidores...'))
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [BASE_URL, method, endpoint, body])

    return data
}