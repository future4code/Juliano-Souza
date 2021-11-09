import axios from "axios";
import { useState } from 'react'
import { useEffect } from "react";

export function useRequestData(BASE_URL, method, endpoint, body) {

    const [data, setData] = useState(undefined)

    useEffect(() => {
        
        if (!body && !endpoint) {
            axios[method](`${BASE_URL}`).then(res => setData(res.data)).catch(rej => console.log(rej))
        } else if (!body) {
            axios[method](`${BASE_URL}${endpoint}`).then(res => setData(res.data.trips)).catch(rej => console.log(rej))
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [BASE_URL, method, endpoint, body])

    return data
}