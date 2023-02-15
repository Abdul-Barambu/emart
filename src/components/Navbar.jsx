import React from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { handlCart } from './redux/reducer/handleCart';

const Navbar = () => {

    const state = useSelector(state => state.handlCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="#">LA COLLECTION</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" role="button" aria-expanded="false">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark mx-1">
                                <i className="fa fa-sign-in"> Login</i></NavLink>
                        </div>
                        <div className="buttons">
                            <NavLink to="/register" className="btn btn-outline-dark mx-1">
                                <i className="fa fa-user-plus"> Register</i></NavLink>
                        </div>
                        <div className="buttons">
                            <NavLink to="/cart" className="btn btn-outline-dark mx-1">
                                <i className="fa fa-shopping-cart"> Cart ({state.length})</i></NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
