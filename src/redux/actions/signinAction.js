import jwt from 'jsonwebtoken';
import server from '../../api/server';
import setAuthorizationToken from '../../utils/setAuthorizationToken';

export const setCurrentUser = (user) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: user
    }
}; 

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
};

export const userSigninRequest = (userData) => {
    return async (dispatch) => {
        
           return await server.post('signin',userData).then(res => {
               const token = res.data.token;
               localStorage.setItem('jwtToken', token);
               setAuthorizationToken(token);
               dispatch(setCurrentUser(jwt.decode(token)));
           });
    };
};