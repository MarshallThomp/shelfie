import React, { Component } from 'react'
import './Header.css'

class Header extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="header">
                <h1 className="title">SHELFIE</h1>
            </div>
        )
    }
}
export default Header