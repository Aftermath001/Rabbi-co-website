import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'
const Navbar = () => {
  return (
    <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container-fluid' >
                    <NavLink className="navbar-brand" to="/">
                         <b>Welcome</b>
                    </NavLink>
                </div>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className='nav-item'>
                            <NavLink className='nav-link active' aria-current="page" to='/'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link active'  to='about'>AboutUs</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link active'  to='contact'>Contact</NavLink>
                        </li>
                        
                        
                    </ul>

                </div>
            </nav>
        </>
  )
}

export default Navbar