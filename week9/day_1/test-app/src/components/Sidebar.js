import React, { Component } from 'react'
import '../App.js'

export default class sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                    <a href="/">Top Projects</a>
                    <a href="/">Best Medium Articles</a>
                    <a href="/">Do You Even Git, Bro?</a>
            </div>
        )
    }
}
