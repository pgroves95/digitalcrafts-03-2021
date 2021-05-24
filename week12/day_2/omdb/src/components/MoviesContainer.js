import React, { useEffect, useState } from 'react'
import Movie from './Movie'

export default function MoviesContainer(props) {
    const { movieResults } = props

    useEffect(() => {
        
    }, [props])
    
    return (
        <div className="wrapper">
            {movieResults.map((movie) => {
                return <Movie title={movie.Title} year={movie.Year} />
            })}
        </div>
    )
}
