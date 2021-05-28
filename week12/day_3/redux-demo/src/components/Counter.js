import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addOne, subtractOne } from '../actions/counterActions'

export default function Counter(props) {

    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={()=>subtractOne(dispatch)}>minus one</button>
            <button onClick={()=>addOne(dispatch)}>plus one</button>
        </div>
    )
}
