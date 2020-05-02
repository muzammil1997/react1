import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { validateInput } from './validation';
import Spinner from '../common/SpinnerPage';
import history from '../../history';

class SigninForm extends React.Component{
    state = { email: '', password: '', errors: {}, isLoading: false};

    onSubmit = (e) => {
       e.preventDefault();
       const { errors, isValid } = validateInput(this.state);
       if(isValid){
        this.setState({errors:{}, isLoading: true})
        this.props.userSigninRequest(this.state)
        .then(()=>{
            this.props.addFlashMessage({
                type: "success",
                text: "You Signed in Successfully. Welcome! "
            });
            history.push('/');
        },(err) => { this.setState({isLoading:false,errors: err.response.data})}
        )
        .catch(()=>{ console.log("Network Error!")});
       }
       if(!isValid){
           this.setState({errors});
       }
    };

    render(){
        const { errors, isLoading } = this.state;
       return(
           <div className="right">
               {isLoading ? <Spinner/> : 

               <form onSubmit={this.onSubmit}>
                   <h4>Welcome!</h4>
                   <br/>
                   <TextFieldGroup
                    label="Email Address"
                    type="email"
                    field="email"
                    onChange={(e)=>this.setState({email:e.target.value})}
                    value={this.state.email}
                    error={errors.email}
                    className="remove-border"
                    />
                    <TextFieldGroup
                    label="Password"
                    type="password"
                    field="password"
                    onChange={(e)=>this.setState({password: e.target.value})}
                    value={this.state.password}
                    error={errors.password}
                    className="remove-border"
                    />
                    <div className="row">
                    <div className="form-group col-sm-12 col-md-6">
                    <input 
                    type="checkbox" 
                    /> 
                    <span> Remember Password</span>
                    </div>
                    <div className="col-sm-12 col-md-6 form-group text-right">
                    <Link to="#">Forget Password?</Link>
                    </div>
                    </div>
                    <div className="form-group">
                       <button className="btn btn-dark">Sign in</button>
                    </div>
                    <span>Don't have an Account? <Link to="/signup">Sign up</Link></span>
                    <br></br>{errors.error && <span className="text-danger">{errors.error}</span>}
               </form>
           }
           </div>
       );
    }
}

SigninForm.propTypes = {
    userSigninRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
};

export default SigninForm; 