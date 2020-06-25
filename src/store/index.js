import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import initialState from './initialState';
import ReduxThunk from 'redux-thunk'

const initStore = (state = initialState) => {
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers/', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};

export default initStore;
