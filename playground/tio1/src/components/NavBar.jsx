import React from "react";
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav>
            <Link to='/quicktio'>Quick Tio</Link>
            <Link to='/'>Home</Link>
        </nav>
    )
}

export default NavBar