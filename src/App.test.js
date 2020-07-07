import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, render, shallow, configure  } from 'enzyme';
import { MemoryRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './App';
import configureStore from 'redux-mock-store';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import GlobalStyle from './styles/global';
import DefaultContainer from './pages/DefaultContainer'
import NotFound from './components/NotFound'

configure({adapter: new Adapter()});

describe('routes using memory router', () => {
  const initialState = { 
    auth:{
    isAuthenticated: false,
    isLoading: false,
    isError: false,
    errorMessage: "",
    user: {}
  } };
  
  const mockStore = configureStore();

  /*
  beforeEach(() => {
    store = mockStore({});
  });
  */

  /*
  it('renders correctly enzyme', () => {
    const wrapper = shallow(<App />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly enzyme', () => {
    const wrapper = mount(<App />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  */
 
  it('should show Home component for / router (using memory router)', () => {
    const component = mount(
      <Provider store={mockStore(initialState)}>
        <MemoryRouter initialentries={["/"]} initialIndex={0}>
          <App/>
        </MemoryRouter>
      </Provider>
    );
    expect(component.find(BrowserRouter)).toHaveLength(1);
    expect(component.find(Switch)).toHaveLength(1);
    expect(component.find(GlobalStyle)).toHaveLength(1);
  });

  /*
  it('Should show NotFound component for route not defined', () => {
    const component = mount( 
      <Provider store={mockStore(initialState)}>
        <MemoryRouter initialEntries={["/unknown"]}>
          <App/>
        </MemoryRouter>
      </Provider>
    );
    expect(component.find(NotFound)).toHaveLength(1);
  })*/
})