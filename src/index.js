import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import jwt from 'jsonwebtoken';
import reducers from './redux/reducers';
import App from './App';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './redux/actions/signinAction';

const store = createStore( reducers,composeWithDevTools(applyMiddleware(reduxThunk)));

if(localStorage.jwtToken){
setAuthorizationToken(localStorage.jwtToken);
store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>, 
document.querySelector('#root')
);