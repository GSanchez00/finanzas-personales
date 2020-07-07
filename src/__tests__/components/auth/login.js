import React from 'react';
import { mount, render, shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../../../components/auth/login'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

configure({adapter: new Adapter()});

const mockStore = configureStore();
const initialState = { 
    auth:{
    isAuthenticated: false,
    isLoading: false,
    isError: false,
    errorMessage: "",
    user: {}
  } };

it('Has mail, password, submit input', () => {
    const component = mount(
    <Provider store={mockStore(initialState)}>
      <Login auth={initialState.auth}/>
    </Provider>);
    //expect(wrapper.find('div')).toHaveLength(0);
    expect(component.find('#mail')).toHaveLength(1);
    expect(component.find('#password')).toHaveLength(1);
    expect(component.find('[type="submit"]')).toHaveLength(1);
    expect(component.find('div.text-danger')).toHaveLength(0);
    //component.find('[type="submit"]').get(0).click();
    //expect(wrapper.find('div')).toHaveLength(3);
  });

  it('Has text error when error', () => {
    const component = mount(
    <Provider store={mockStore(initialState)}>
      <Login auth={{
            isAuthenticated: false,
            isLoading: false,
            isError: true,
            errorMessage: "",
            user: {}
        }}/>
    </Provider>);
    expect(component.find('div.text-danger')).toHaveLength(1);
  });

  it('Has mail and password input', () => {
    const component = mount(
    <Provider store={mockStore(initialState)}>
      <Login auth={{
            isAuthenticated: false,
            isLoading: false,
            isError: false,
            errorMessage: "",
            user: {}
        }}/>
    </Provider>);

    expect(component.find('div.text-danger')).toHaveLength(0);
    component.find('#mail').simulate('change', { target: { value: 'mail@mail.com' }  });
    component.find('#password').simulate('change', { target: { value: 'psw' }  });
    component.find('[type="submit"]').simulate('click');
    component.update();
    //console.log(component.html());
    //expect(component.find('div.text-danger')).toHaveLength(1);
  });

 
  it('Has mail and password input', () => {
    const component = mount(
    <Provider store={mockStore(initialState)}>
      <Login auth={{
            isAuthenticated: false,
            isLoading: false,
            isError: false,
            errorMessage: "",
            user: { "userType" : {"id" : 1 } }
        }}/>
    </Provider>);

    expect(component.find('div.text-danger')).toHaveLength(0);
    //component.find('#mail').simulate('change', { target: { value: 'mail@mail.com' }  });
    //component.find('#password').simulate('change', { target: { value: 'psw' }  });
    //component.find('[type="submit"]').first().simulate('click');
    //component.find('#mail').instance().props.onChange(({ target: { value: 'mail@mail.com' } }));
    //expect(component.find('#mail').props.value).to.equal('mail@mail.com');
    //component.update();

    let input = component.find('#mail');
    //input.onChange({ target: { value: 'mail@mail.com' } })
    input.simulate('change', "6"); //solo se usa si cambio un estado

    //input.instance().value = 'mail@mail.com';
    //component.find('#mail').getElement(0).simulate('change', { target: { value: 'mail@mail.com' }  });
    //component.find('#mail').simulate('change', component.find('#mail'));
    //done();
    component.update()
    console.log(component.html());
    //expect(component.find('div.text-danger')).toHaveLength(1);
  });
  