import { useState, useEffect, useContext } from 'react'
import { PublicContext } from '../contexts/PublicContext'

export function useTripData(id) {

    const [data, setData] = useState(undefined)

    const { trips } = useContext(PublicContext)

    useEffect(() => {

        setData(trips?.filter(item => item.id === id))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return data
}