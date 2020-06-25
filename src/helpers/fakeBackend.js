import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import _users from '../data/users.json'
import _records from '../data/records.json'
import _currencies from '../data/currencies.json'
import _categories from '../data/categories.json'

export function configureFakeBackend() {
    var mock = new MockAdapter(axios);
  
    mock.onGet("/currencies").reply(200, {
      data: _currencies,
    });

    mock.onGet("/customers").reply(200, {
      data: _users.filter(x=>x.userType.id!==1)
    });

    mock.onGet("/categories").reply(200, {
      data: _categories
    });

    mock.onGet("/records").reply(200, {
      data: _records,
    });
    

    mock.onPost("/login").reply(function (config) {
        let loginData=(JSON.parse(config.data).loginData);

        let user=_users.find(x=>x.email===loginData.email)
        if(!user)
        {
          return [401,{}];
        }
        
        if(user.password!==loginData.password)
        {
          return [401,{}];
        }

        return [
            200,
            {
              user: user,
            },
          ];
    });
}