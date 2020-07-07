import React from 'react'
import { Navbar, Button, Nav } from 'react-bootstrap'
import logo from '../logo.png'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import {deAuthenticateSuccess} from '../store/actions/authAction'

const NavMenu = ({auth}) => {
    const location = useLocation();
    const dispatch=useDispatch();
    let isAuthenticated=auth.user && auth.user.userType;
    
    const logOut = (e) => {
      e.preventDefault();
      dispatch(deAuthenticateSuccess());
    };

    return(
        location.pathname !== '/login' && 
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">      
                <img
                    alt=""
                    src={logo}
                    width="100"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Navbar.Toggle />
            {
                isAuthenticated && auth.user.userType.id===1 &&
                <Nav>
                    <NavLink className="nav-link" to="/admin/customers">Customers</NavLink>
                    <NavLink className="nav-link" to="/admin/categories">Categories</NavLink>
                    <NavLink className="nav-link" to="/admin/currencies">Currencies</NavLink>
                </Nav>
            }
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <div className="px-2">
                {
                    isAuthenticated ? `Signed in as: ${auth.user.name}(${auth.user.userType.name})` : ""
                }
                </div>
                </Navbar.Text>
                {isAuthenticated && <Button onClick={logOut} variant="outline-info">Sign Out</Button>}
            </Navbar.Collapse>
        </Navbar>
    )
}

 export default NavMenu

 NavMenu.propTypes = {
    auth: PropTypes.object,
    logout: PropTypes.func
  };