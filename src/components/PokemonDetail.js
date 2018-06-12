import React from 'react'

const PokemonDetail = (props) => {

  if (!props.pokemonToDisplay) return null

  const pokemonName = props.pokemonToDisplay.name
  const capitalizedName = pokemonName.charAt(0).toUpperCase() + pokemonName.substr(1);


  return (
    <div>
      <h3>{capitalizedName}</h3>
      <img src={props.imageToDisplay}/>
    </div>
  )

}

export default PokemonDetail;
