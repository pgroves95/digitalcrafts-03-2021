import React, { Component } from 'react';
import Card from "./Card"
import "./cardContainer.css"

class CardContainer extends Component {
    state = {
        searchCriteria: "",
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

    render() {
        
        const {pokemonData} = this.props
        
        const filteredData = pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) ? pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) :pokemonData[0].pokemon

        
        return (
            <div className="main-card-container">
                <div>
                <input className="search-field" onChange={(e)=>this.searchCriteria(e)} type="text" placeholder="Search for a pokemon"/>

                </div>
                {/* form */}
                <div>
                 <input className="create-field"type="text" placeholder="Enter a Name"/>
                 <input className="create-field" type="text" placeholder="Enter a HP"/>
                 <input className="create-field" type="text" placeholder="Enter front URL"/>
                 <input className="create-field" type="text" placeholder="Enter back URL"/>
                <button className="create-button">Create</button>
                </div>
                <div className="card-container">

                {filteredData.map((singlePokemon,index) => <Card key={singlePokemon.name}  pokemon={singlePokemon}  />
                )}
                </div>
              
            </div>
        );
    }
}


export default CardContainer;