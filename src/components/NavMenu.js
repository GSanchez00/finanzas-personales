import React from 'react'
import { Navbar, Button, Nav } from 'react-bootstrap'
import logo from '../logo.png'
import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types";

const NavMenu = ({auth, logout}) => {
    let isAuthenticated=auth.user && auth.user.userType;
    return(
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
            {isAuthenticated && <Button onClick={logout} variant="outline-info">Sign Out</Button>}
        </Navbar.Collapse>
    </Navbar>
    )
}

 export default NavMenu

 NavMenu.propTypes = {
    auth: PropTypes.object,
    logout: PropTypes.func
  };