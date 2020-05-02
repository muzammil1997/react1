import server from '../../api/server';

export const userSignupRequest = (userData) => {
    return async (dispatch) => {
        
           return await server.post('signup',userData);
    };
};