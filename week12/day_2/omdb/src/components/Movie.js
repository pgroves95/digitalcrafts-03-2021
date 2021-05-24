import React from 'react'

export default function Movie(props) {


    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.year}</h3>
        </div>
    )
}
