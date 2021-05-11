import React, { Component } from 'react'
import ExoticCars from './Exotic-cars'

export default class Garage extends Component {

    constructor(props){
        super(props)
        this.state = {
            vehicles: {
                exotic: {
                    foreign: [
                        {name: "foreign exotic 1"},
                        {name: "foreign exotic 2"}
                    ],
                    american: [
                        {name: "american exotic 1"},
                        {name: "american exotic 2"}
                    ]
                },
                muscle: {
                    american:[
                        {name: "american muscle 1"},
                        {name: "american muscle 2"}
                    ]
                },
                motorcycle: {
                    foreign: [
                        {name: "foreign moto 1"},
                        {name: "foreign moto 2"}
                    ],
                    american: [
                        {name: "american moto 1"},
                        {name: "american moto 2"}
                    ]
                }
            }
        }
    }

    render(){
        return(
            <ExoticCars
                
            />
        )
    }
}
