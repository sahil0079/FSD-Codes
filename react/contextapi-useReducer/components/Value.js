
import React, { useContext } from 'react'
import { CountContext } from '../App'

function Value() {

    const countContext = useContext(CountContext)
    return (
        <div>
            <button onClick={() => countContext.countDispatch({
                type: 'increment', payload: 10
            })} >Increment</button>
            {/* <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button> */}


            {/* 

            dispatch({
                type: 'Add_to_basket',
                payload: {
                    id,
                    title,
                    price,
                    rating,
                    image
                }
            })
            
            */}

        </div>
    )
}

export default Value