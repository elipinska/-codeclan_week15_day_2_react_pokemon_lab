import React from 'react'

const PokemonSelector = (props) => {

  const options = props.pokemonData.map((pokemon, index) => {
    const pokemonName = pokemon.name
    const capitalizedName = pokemonName.charAt(0).toUpperCase() + pokemonName.substr(1);
    return <option value={index} key={index}>{capitalizedName}</option>
  })

  function handleChange(event){
    props.onPokemonSelected(event.target.value)
  }

  return(
    <select id="pokemon-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a pokemon...</option>
      {options}
    </select>
  )
}

export default PokemonSelector
