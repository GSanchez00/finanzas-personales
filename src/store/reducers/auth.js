import initialState from '../initialState';
import * as actionTypes from '../actions/authActionTypes';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
      case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.userData,
        isAuthenticated: true
      };
      case actionTypes.DEAUTH_SUCCESS:
      return {
        ...state,
        user: {},
        isAuthenticated: false
      };
      case actionTypes.AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};
