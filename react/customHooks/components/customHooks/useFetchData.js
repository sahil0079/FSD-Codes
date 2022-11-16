import React, { useState, useEffect } from 'react'

function useFetchData(url) {
    const [data, setData] = useState([])



    //component did mount
    useEffect(() => {


        fetch(url)
            .then((response) => response.json())
            .then(data => {


                setData(data)

            })



    }, [url])
    return [data]
}

export default useFetchData