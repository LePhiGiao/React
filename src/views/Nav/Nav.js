import React from 'react'
import './Nav.scss'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" exact="true" activeclassName="active" >Home</NavLink>
                <NavLink to="/todo" activeclassName="active">Todos</NavLink>
                <NavLink to="/about" activeclassName="active">About</NavLink>
            </div>
        )
    }
}
export default Nav