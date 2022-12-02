import React, { useContext } from 'react'
import PokemonContext from '../PokemonContext'
import PokemonRow from './PokemonRow'

function PokemonTable() {

    const { filter, pokemon, selectedPokemonSet } = useContext(PokemonContext)

    return (
        <table width='100%' >
            <tbody>
                {
                    pokemon.slice(0, 20).map((pokemon) => (
                        <PokemonRow
                            pokemon={pokemon}
                            onClick={(pokemon) => selectedPokemonSet(pokemon)}

                        />
                    ))
                }
            </tbody>
        </table>
    )
}

export default PokemonTable