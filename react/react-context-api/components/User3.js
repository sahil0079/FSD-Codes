import React, { useContext } from 'react'
import { UserContext } from '../App'

function User3() {
    const context = useContext(UserContext)
    return (
        // <h1>{context}</h1>
        <UserContext.Consumer>
            {value => <h1> {value} </h1>}
        </UserContext.Consumer>
    )
}

export default User3