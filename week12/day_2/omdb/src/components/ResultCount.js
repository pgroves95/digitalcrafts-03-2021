import React from 'react'

export default function ResultCount(props) {
    
    if(props.size > 0){
        return (
            <div className="ResultCount">
                <h4>{props.size} results</h4>
            </div>
        )
    }
    else {
        return null
    }
}