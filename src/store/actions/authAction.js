import * as actionTypes from './authActionTypes';
import {authenticateUser} from '../../services/authService';

export const authenticateStarted = () => ({
    type:  actionTypes.AUTH_START
});

export const authenticateSuccess = userData => ({
    type: actionTypes.AUTH_SUCCESS,
    userData
});

export const authenticateError = errorMessage => ({
    type: actionTypes.AUTH_ERROR,
    errorMessage
});

export const deAuthenticateSuccess = () => ({
    type: actionTypes.DEAUTH_SUCCESS,
});

export const authenticate = (authData) => async dispatch => {
    dispatch(authenticateStarted())
    try{
          let userData = await authenticateUser(authData);
          dispatch(authenticateSuccess(userData.user));
    }
    catch(error){
        dispatch(authenticateError(error.message));
    }
}