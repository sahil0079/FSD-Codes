
import React, { useEffect, useState } from 'react'

function useFetchData(url) {

    const [data, setData] = useState([])

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))


    }, [])

    return [data]
}

export default useFetchData