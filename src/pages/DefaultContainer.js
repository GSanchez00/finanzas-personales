import React from 'react'
import { useSelector } from 'react-redux';
import Home from '../components/Home';
import Customers from '../components/Customers';
import Currencies from '../components/Currencies';
import Categories from '../components/Categories';
import NavMenu from '../components/NavMenu';
import PrivateRoute from '../components/routes/PrivateRoute';
import {deAuthenticateSuccess} from '../store/actions/authAction'
import { useDispatch } from 'react-redux';

const DefaultContainer = () => {
    const dispatch=useDispatch();
    const auth = useSelector(state => state.auth);
    let isAuthenticated=auth && auth.isAuthenticated;

    const logOut = (e) => {
        e.preventDefault();
        dispatch(deAuthenticateSuccess());
    };

    return(
    <div>
        <NavMenu auth={auth} logout={logOut} />
        <PrivateRoute exact path="/" isAuthenticated={isAuthenticated} component={Home} />
        <PrivateRoute path={`/admin/customers`} isAuthenticated={isAuthenticated} component={Customers} />
        <PrivateRoute path={`/admin/currencies`} isAuthenticated={isAuthenticated} component={Currencies} />
        <PrivateRoute path={`/admin/categories`} isAuthenticated={isAuthenticated} component={Categories} />
    </div>
    )
}

 export default DefaultContainer