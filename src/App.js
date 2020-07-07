import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import { useSelector } from 'react-redux';
import GlobalStyle from './styles/global';
import NavMenu from './components/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/routes/PrivateRoute'
import Login from './components/auth/login'
import NotFound from './components/NotFound'
import { configureFakeBackend } from './helpers/fakeBackend';
import Home from './components/Home'
import Customers from './components/Customers'
import Currencies from './components/Currencies'
import Categories from './components/Categories'

configureFakeBackend();

const App=() => {
  const auth = useSelector(state => state.auth);
  let isAuthenticated = auth && auth.isAuthenticated;

  return(
    <>
      <GlobalStyle />
      <BrowserRouter>
      <NavMenu auth={auth} />
          <Switch>
              <Route path="/login">
                <Login auth={auth}/>
              </Route>
              <PrivateRoute exact path="/" isAuthenticated={isAuthenticated} component={Home} />
              <PrivateRoute path="/admin/customers" isAuthenticated={isAuthenticated} component={Customers} />
              <PrivateRoute path="/admin/currencies" isAuthenticated={isAuthenticated} component={Currencies} />
              <PrivateRoute path="/admin/categories" isAuthenticated={isAuthenticated} component={Categories} />
              <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
    )
}

export default App;