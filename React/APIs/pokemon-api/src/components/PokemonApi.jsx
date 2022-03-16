import React, {useState} from 'react'
import axios from 'axios'

const PokemonApi = () => {
  const [pokemon, setPokemon] = useState()

  const fetchPokemonThen = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/charizard`)
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        console.log(jsonResponse)
        setPokemon(jsonResponse)
      })
      .catch(err => console.log(err))
  }

  const fetchPokemonAwait = async() => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/mewtwo`)
    const jsonResponse = await response.json()
    console.log(response)
    console.log(jsonResponse)
    setPokemon(jsonResponse)
  }

  const fetchPokemonAxios = async() => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/gengar`)
    console.log(response.data)
    setPokemon(response.data)
  }

  return (
    <div>
      <button onClick={fetchPokemonThen}>Charizard</button>
      <button onClick={fetchPokemonAwait}>Mewtwo</button>
      <button onClick={fetchPokemonAxios}>Gengar</button>
      {pokemon ?
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default}/>
        </div>:
        <h1>Fetch a Pokemon by clicking the button!</h1>
      }
      
    </div>
  )
}

export default PokemonApi