import React, { useContext } from 'react'
import styled from '@emotion/styled'
import PokemonContext from '../PokemonContext'


const Input = styled.input`
    width: 100%;
    padding: 0.2ream;
    font-size: large;
    border-radius: 5px;
`

function PokemonFilter() {
    const { filter, filterSet } = useContext(PokemonContext)
    // console.log('filter', filter)
    return (
        <Input
            value={filter}
            type='text'
            onChange={(event) => filterSet(event.target.value)}
        />
    )
}

export default PokemonFilter