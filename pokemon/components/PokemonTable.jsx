import React, { useContext } from 'react'
import PokemonContext from '../PokemonContext'
import PokemonRow from './PokemonRow'

function PokemonTable() {

    const { filter, pokemon, selectedPokemonSet } = useContext(PokemonContext)

    // console.log(pokemon)

    return (
        <table width='100%' >
            <tbody>
                {
                    pokemon.filter(({ name: { english } }) =>
                        english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).slice(0, 20).map((pokemon) => (
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