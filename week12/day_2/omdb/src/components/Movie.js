import React from 'react'
import '../App.css';

export default function Movie(props) {
    const {Title, Year, Poster} = props.movie
    console.log(props.key)
    return (
        <div className="Movie">
            <h3>{Title}</h3>
            <img src={Poster} alt="movie poster"/>
            <h4>{Year}</h4>
        </div>
    )
}
