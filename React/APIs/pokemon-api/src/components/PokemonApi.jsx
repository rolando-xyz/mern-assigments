import React, {useState} from 'react'
import axios from 'axios'

const PokemonApi = () => {
  const [pokemon, setPokemon] = useState()
  const [pokemons, setPokemons] = useState([])

  const fetchPokemonThen = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        console.log(jsonResponse.results)
        setPokemons(jsonResponse.results)
      })
      .catch(err => console.log(err))
  }


  const fetchPokemonsAxios = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(response => {
        console.log("all pokemon")
        setPokemons(response.data.results)
      })
      
  }

  return (
    <div>
      <button onClick={fetchPokemonThen}>Charizard</button>
      <button onClick={fetchPokemonsAxios}>Gengar</button>
      {pokemons && pokemons.map((p, i)=>{
          return (<div key={i}>{p.name}</div>)
      })}
      
    </div>
  )
}

export default PokemonApi