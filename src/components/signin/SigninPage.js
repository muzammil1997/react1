import './signin.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../assets/signin.jpg';
import SigninForm from './SigninForm';
import { userSigninRequest, addFlashMessage } from '../../redux/actions';

class SigninPage extends React.Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="left col-md-7">
                        <img width="500" height="700" src={logo} alt="img" />
                    </div>
                    <div className="col-md-5 col-md-offset-5">
                        <SigninForm 
                        userSigninRequest={this.props.userSigninRequest} 
                        addFlashMessage={this.props.addFlashMessage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

SigninPage.propTypes = {
    userSigninRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
};

export default connect(null,{userSigninRequest,addFlashMessage})(SigninPage);