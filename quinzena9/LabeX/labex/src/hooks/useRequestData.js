import axios from "axios";
import { useState, useEffect } from 'react'

export function useRequestData(BASE_URL, method, endpoint, body, token) {

    const [data, setData] = useState([])

    useEffect(() => {
        
        if (!body && !endpoint) {

            axios[method](`${BASE_URL}`).then(res => setData(res.data)).catch(rej => console.log(rej))

        } else if (!body && !token) {

            axios[method](`${BASE_URL}${endpoint}`).then(res => setData(res.data.trips)).catch(rej => console.log(rej))

        } else if (!body && token){

            const auth = {headers: {auth: token}}

            axios[method](`${BASE_URL}${endpoint}`, auth).then(res => setData(res.data.trip)).catch(rej => console.log(rej))
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [BASE_URL, method, endpoint, body])

    return data
}