import React  from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import {authenticate} from '../../store/actions/authAction'
import {USER_TYPE} from '../../constants/enums'

library.add(faUser);

const Login = ({auth}) => 
{
    const dispatch = useDispatch();
    
    const login = (e) => {
        e.preventDefault();
        const user = {
            email: document.getElementById("mail").value,
            password: document.getElementById("password").value
        };
        dispatch(authenticate(user));
    };
    
    if(auth.isAuthenticated){
        if(auth.user.userType.id===USER_TYPE.ADMIN)
            return <Redirect to='/admin/customers' />
        else
            return <Redirect to='/' />
    }

    return (
        <div className="row" style={{justifyContent: "center", alignItems: "center", marginTop:"5%"}}>
            <div className="col-sm-4 centrado">
                  <div className="card">
                  <article className="card-body">
                      <br /><br /><h4 className="card-title mb-4 mt-1">Sign in</h4>
                      <hr />
                      <form onSubmit={login}>
                      <div className="form-group">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                          </div>
                          <input name="mail" id="mail" type="email" className="form-control" required placeholder="Email or login"  />
                      </div> 
                      </div> 
                      <div className="form-group">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"> <FontAwesomeIcon icon={faLock} /> </span>
                          </div>
                          <input id="password" name="password" type="password" className="form-control" required placeholder="******"/>
                      </div> 
                      </div> 
                      <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">Login</button>
                      </div> 
                      {auth.isError && <div className="text-danger text-center">User or Password incorrect!</div>}
                      </form>
                  </article>
                  </div> 
            </div> 
            
          </div>
      );
}


export default Login;