import React, { useState, useEffect } from 'react'
import Jokes from './Jokes'
const jokeCache = []

export default function JokeContainer() {
    
    const [joke, setJoke] = useState("")
    const [button, setButton] = useState(true)
    

    useEffect(() => {
        getICHDJ();
    }, [joke])

    const getICHDJ = async () => {
        const data = await fetch("https://icanhazdadjoke.com/", {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
        const json = await data.json()
        setJoke(json.joke)
        
    }


    return (
        <div>
            <h2>Dad Jokes for Days!</h2>
            <Jokes joke={joke}/>
            {/* <button onClick={() => addJoke()}>Add New Dad Joke</button> */}
        </div>
    )
}
