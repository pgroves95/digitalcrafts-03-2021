import React, { Component } from 'react'
import MotoAm from './Motorcyles-american'

export default class Motorcyles extends Component {
    render() {
        return (
            <div>
            {this.props.vehicleName}
                <MotoAm/>
            </div>
        )
    }
}
