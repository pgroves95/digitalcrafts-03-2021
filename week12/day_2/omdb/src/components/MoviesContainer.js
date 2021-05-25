import React, { useEffect } from 'react'
import '../App.css';
import Movie from './Movie'

export default function MoviesContainer(props) {

    const { movieResults } = props

    useEffect(() => {
        return
    }, [props])
    
    return (
        <div className="moviesContainer">
            {movieResults.map((movie) => {
                return <Movie movie={movie} key={movie.imdbID} id={movie.imdbID} />
            })}
        </div>
    )
}
