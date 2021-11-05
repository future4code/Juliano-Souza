import axios from "axios";
import { useState } from 'react'
import { useEffect } from "react/cjs/react.development";
import { BASE_URL } from "../constants/urls";

export function useRequestData(method, endpoint, body) {

    const [data, setData] = useState(undefined)

    useEffect(() => {
        
        if (!body) {
            axios[method](`${BASE_URL}${endpoint}`).then(res => setData(res.data.trips)).catch(rej => console.log(rej))
        }

    }, [method, endpoint, body])

    return data
}