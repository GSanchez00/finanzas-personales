import React from 'react'
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Login from '../components/auth/login';

const LoginContainer = () => 
{
    const auth = useSelector(state => state.auth);
    return(
        <div className="container">
            <Route exact path="/login">
                <Login auth={auth}/>
            </Route>
        </div>
    )
}

export default LoginContainer
