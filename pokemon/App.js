import { useEffect, useState } from 'react';
import './App.css';
import styled from '@emotion/styled'
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';
import { Button } from '@mui/material'

import { useAuth0 } from '@auth0/auth0-react'




const Title = styled.h1`
  text-align: center;
`;

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`
const ButtonContainer = styled.div`
  margin: auto;
  width: 40px;
  padding-top: 20em;
`
const ButtonContainerTwo = styled.div`
  margin: auto;
  width: 40px;
  paddin: 4em;
`

function App() {
  const [pokemon, pokemonSet] = useState(null)
  const [filter, filterSet] = useState("")
  const [selectedPokemon, selectedPokemonSet] = useState(null)

  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0()
  console.log(isAuthenticated, user)

  useEffect(() => {

    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(data => pokemonSet(data))
  }, [])

  if (!pokemon) {
    return <div>Loading...</div>
  }
  return (
    <PokemonContext.Provider value={{
      filter,
      pokemon,
      filterSet,
      pokemonSet,
      selectedPokemon,
      selectedPokemonSet

    }} >


      {isAuthenticated ? (
        <ButtonContainerTwo>
          <Button
            variant='contained'
            color='primary'
            onClick={() => logout({
              returnTo: window.location.origin
            })}
          >
            Logout
          </Button>
        </ButtonContainerTwo>) : (
        <ButtonContainer>
          <Button
            variant='contained'
            color='primary'
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
        </ButtonContainer>

      )}


      {isAuthenticated && (
        <PageContainer>
          <Title>Pokemon Search</Title>

          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>

        </PageContainer>
      )}


    </PokemonContext.Provider>

  );
}

export default App;
