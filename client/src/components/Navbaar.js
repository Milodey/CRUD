import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary bg-dark text-light">
                <div className="container-fluid">
                <a className="navbar-brand text-light" >
                        Nirmallya CRUD APPLICATION
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <NavLink className="nav-link active text-light" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                        <li className="nav-item">
                                <NavLink className="nav-link active text-light" aria-current="page" to="/register">
                                    Add User
                                </NavLink>
                            </li>
                        <li className="nav-item">
                                <NavLink className="nav-link active text-light" aria-current="page" to="/alluser">
                                    All User
                                </NavLink>
                            </li>
                          
                        </ul>
                    
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
