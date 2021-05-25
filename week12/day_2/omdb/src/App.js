import React, { useEffect, useState } from 'react'
import './App.css';
import MoviesContainer from './components/MoviesContainer'
import ResultCount from './components/ResultCount'


function App() {

  const [movieResults, setMovieResults] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {

  }, [movieResults])

  const handleInput = (e) => {
    setSearchInput(e.target.value)
  }

  const fetchMovies = async (search) => {
      setSearchInput("")
      const urlSearch = search.toLowerCase().replace(" ", "_")
      const data = await fetch(`http://www.omdbapi.com/?apikey=5f26534f&s=${urlSearch}&type=movie&r=json`)
      const json = await data.json()
      setMovieResults(json.Search)
  } 


  return (
    <div className="App">
      <h1>OMDB Movie Search</h1>
      <input type="text" className="searchInput" onChange={(e)=>handleInput(e)}value={searchInput} placeholder="Search for a Movie" />
      <br/>
      <button onClick={() => fetchMovies(searchInput)}>Find Movie</button>
      <ResultCount size={movieResults.length} />
      <MoviesContainer movieResults={movieResults} />
    </div>
  );
}

export default App;
