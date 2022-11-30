import React from 'react'
import { useNavigate } from 'react-router-dom'


function About() {
    const navigate = useNavigate()

    const goToHomePage = () => {

        navigate('/')
    }
    return (
        <div>
            <h1>About us page</h1>

            <button onClick={goToHomePage} >Home</button>
        </div>
    )
}

export default About