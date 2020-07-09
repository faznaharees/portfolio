import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  
        return(
            <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <ul className="right myfont">
                        <li> <NavLink to='/'>HOME</NavLink></li>
                        <li> <Link to='/exp'>EXPERIENCE</Link></li>
                        <li> <Link to='/works'>WORKS</Link></li>
                        <li> <Link to='/contact'>CONTACT</Link></li>
                    </ul>
            </div>
            </div> 
            </nav>           

        )
    
    
}

export default Navbar;