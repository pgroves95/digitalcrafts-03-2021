import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Counter(props) {

    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={()=>dispatch({type: "SUBTRACT"})}>minus one</button>
            <button onClick={()=>dispatch({type: "ADD"})}>plus one</button>
        </div>
    )
}
