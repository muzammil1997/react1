import './signup.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../assets/signin.jpg';
import SignupForm from './SignupForm';
import { 
    userSignupRequest,
    addFlashMessage
 } from '../../redux/actions';

class SignupPage extends React.Component{

    render(){
        
        return(
            <div className="container">
                <div className="row">
                    <div className="left col-md-6">
                    <img width="500" height="700" src={logo} alt="img" />
                    </div>
                    <div className="col-md-6 col-md-offset-6">
                        <SignupForm 
                        userSignupRequest={this.props.userSignupRequest} 
                        addFlashMessage={this.props.addFlashMessage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return { };
};

export default connect(mapStateToProps,{userSignupRequest,addFlashMessage})(SignupPage);