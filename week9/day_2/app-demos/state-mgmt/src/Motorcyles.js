import React, { Component } from 'react'
import MotoAm from './Motorcyles-american'

export default class Motorcyles extends Component {
    render() {
        console.log(this.props.motorcycles)
        return (
            <div>
                <MotoAm/>
            </div>
        )
    }
}
