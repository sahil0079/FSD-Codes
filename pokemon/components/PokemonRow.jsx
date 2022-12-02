import React from 'react'
import Button from '@mui/material/Button'

function PokemonRow({ pokemon, onClick }) {
    return (
        <>
            <tr key={pokemon.id}>
                <td> {pokemon.name.english} </td>
                <td> {pokemon.type.join(", ")} </td>
                <td>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => onClick(pokemon)}
                    >
                        More Info
                    </Button>
                </td>

            </tr>
        </>
    )
}

export default PokemonRow