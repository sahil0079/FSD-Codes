import React from 'react'
import styled from '@emotion/styled'


const Input = styled.input`
    width: 100%;
    padding: 0.2ream;
    font-size: large;
    border-radius: 5px;
`

function PokemonFilter() {
    return (
        <Input type='text' />
    )
}

export default PokemonFilter