import React from 'react'

const PokemonDetail = (props) => {

  if (!props.pokemonToDisplay) return null

  return (
    <div>
      <h3>{props.pokemonToDisplay.name}</h3>
    </div>
  )

}

export default PokemonDetail;
