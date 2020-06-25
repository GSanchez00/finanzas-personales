import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import GlobalStyle from './styles/global';

import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultContainer from './pages/DefaultContainer'
import LoginContainer from './pages/LoginContainer'
import NotFound from './components/NotFound'

import { configureFakeBackend } from './helpers/fakeBackend';
configureFakeBackend();

function App() {
  return(
    <>
      <GlobalStyle />
      <BrowserRouter>
          <Switch>
              <Route exact path="/(login)" component={LoginContainer}/>
              <Route exact path={["/", "/admin", "/admin/currencies", "/admin/categories", "/admin/customers"]} component={DefaultContainer}/>
              <Route exact={true}  path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
    )
}

export default App;