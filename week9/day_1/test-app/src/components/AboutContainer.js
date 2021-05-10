import React, { Component } from 'react'
import '../App.js'
import AboutDescription from './AboutDescription'
import headshot from '../headshot.jpg'


export default class AboutContainer extends Component {
    render() {
        return (
            <div className="aboutcontainer">
            <img className="headshot" src={headshot} alt=""></img>
            <h1>The Shining Star of Boot Camp Grads</h1>
                <AboutDescription />
            </div>
        )
    }
}
