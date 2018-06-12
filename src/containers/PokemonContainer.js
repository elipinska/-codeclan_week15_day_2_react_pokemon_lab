import React, {Component} from 'react'
import PokemonSelector from '../components/PokemonSelector'
import PokemonDetail from '../components/PokemonDetail'

class PokemonContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      pokemons: [],
      currentPokemon: null,
      currentPokemonUrl: null
    }
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this)
    this.getPokemonImage = this.getPokemonImage.bind(this)
  }

  componentDidMount(){
    const url = 'https://pokeapi.co/api/v2/pokemon-form/'
    fetch(url)
      .then(res => res.json())
      .then(pokemonData => this.setState({pokemons: pokemonData['results']}))
      .catch(error => console.log('Error', error))
  }

  getPokemonImage(pokemon) {

    const url = pokemon.url
    fetch(url)
      .then(res => res.json())
      .then(singlePokemonData => this.setState({pokemonImageUrl: singlePokemonData.sprites.front_default}))
      .catch(error => console.log('Error', error))

  }

  handlePokemonSelected(index){
    const selectedPokemon = this.state.pokemons[index]
    this.setState({currentPokemon: selectedPokemon})

    if (selectedPokemon) {
      this.getPokemonImage(selectedPokemon)
    }
  }

  render(){
    console.log(this.state.pokemonImageUrl);
    return(
      <div className="pokemon-display">
        <h2>
          Pokemons
        </h2>
        <PokemonSelector
          pokemonData={this.state.pokemons}
          onPokemonSelected={this.handlePokemonSelected}
        />
        <PokemonDetail pokemonToDisplay={this.state.currentPokemon} imageToDisplay={this.state.pokemonImageUrl}/>
      </div>
    )
  }
}

export default PokemonContainer
