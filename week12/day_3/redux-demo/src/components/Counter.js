import React from 'react'

export default function Counter(props) {
    return (
        <div>
            <h1>Count: {props.count}</h1>
            <button onClick={()=>props.inc}>plus one</button>
            <button onClick={()=>props.dec}>minus one</button>
        </div>
    )
}
