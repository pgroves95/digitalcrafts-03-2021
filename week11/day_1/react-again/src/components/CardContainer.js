import React, { Component, useDebugValue } from 'react';
import Card from "./Card"
import "./cardContainer.css"

class CardContainer extends Component {
    state = {
        searchCriteria: "",
        PokemonName: "",
        PokemonHP: "",
        pokemonBerries: []
    }

    async componentDidMount() {
      const berryUrl = "https://pokeapi.co/api/v2/berry/"
       const fetchData = await fetch(berryUrl,{ headers: {
      'Content-Type': 'application/json'
      
    },})
    const json = await fetchData.json()
    this.setState({
        pokemonBerries:json.results
    })
   }
   
   searchCriteria = (event) =>{
       const search = event.target.value.toLowerCase()
    
           this.setState({
               searchCriteria:search
           })
       
   }

   handleChange = (event) => {
       const {value} = event.target
       if(event.target.className === "create-name") {
            this.setState({
                PokemonName:value
            })
        }

        if(event.target.className === "create-hp") {
            this.setState({
                PokemonHP:value
            })
        }
   }

   createNewPokemon = (event) => {

    const newPokemon =   {
        id: null,
        name: this.state.PokemonName,
        hp: this.state.PokemonHP,
        sprites: {
          front:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        }
      }
      console.log(newPokemon)
      this.props.pokemonData.unshift(newPokemon)
   }

   

    render() {
        
        const {pokemonData} = this.props
        
        const filteredData = pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) ? pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) :pokemonData[0].pokemon

        
        return (
            <div className="main-card-container">
                <div>
                <input className="search-field" onChange={(e)=>this.searchCriteria(e)} type="text" placeholder="Search for a pokemon"/>

                </div>
                {/* form */}
                <form onSubmit={(e)=>this.createNewPokemon(e)}>
                <h2>Add a Pokemon</h2>
                <div>
                 <input value={this.state.PokemonName} onChange={(e)=>this.handleChange(e)} className="create-name" type="text" placeholder="Enter a Name"/>
                 <input value={this.state.PokemonHP} onChange={(e)=>this.handleChange(e)} className="create-hp" type="text" placeholder="Enter a HP"/>
                 {/* <input className="create-field" type="text" placeholder="Enter front URL"/>
                 <input className="create-field" type="text" placeholder="Enter back URL"/> */}
                <button type="submit" className="create-button">Create</button>
                </div>
                </form>
                
                <div className="card-container">

                {filteredData.map((singlePokemon,index) => <Card key={singlePokemon.name}  pokemon={singlePokemon}  />
                )}
                </div>
              
            </div>
        );
    }
}


export default CardContainer;