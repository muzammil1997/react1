import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { validateInput } from './Validation';
import Spinner from '../common/SpinnerPage';
import history from '../../history';



class SignupForm extends React.Component{
    state = { 
        fname: '', 
        lname: '', 
        brand:'', 
        phone: '', 
        email: '', 
        password: '', 
        cPassword: '', 
        errors: {},
        isLoading: false
    };

    onSubmit = (e) => {
       e.preventDefault();
       const { errors, isValid } = validateInput(this.state);
      
       if(isValid){
       this.setState({isLoading: true,errors:{}});
       this.props.userSignupRequest(this.state)
       .then(
           () => {
             this.props.addFlashMessage({
                 type: 'success',
                 text: 'You signed up successfully. Welcome!'
             });
            
             history.push('/');
           },
           (err) => {
               this.setState({errors: err.response.data, isLoading: false})
            }
           )
       .catch(  
          () => { console.log("Network Error!") }
          );
       }
       if(!isValid){
         this.setState({errors});
       }
    };
   

    render(){
        const { errors } = this.state;

       return(
           <div className="right">    
               { this.state.isLoading ? <Spinner/> : 
               <form onSubmit={this.onSubmit}>
                   <h4>Sign up below</h4>
                   <br/>
                   <div className="row">
                       <div className="col-sm-12 col-md-6">
                       <TextFieldGroup
                        label="First Name"
                        type="text"
                        field="fname"
                        onChange={(e)=>this.setState({fname:e.target.value})}
                        value={this.state.fname}
                        error={errors.fname}
                        className="remove-border"
                        />
                       </div>
                       <div className="col-sm-12 col-md-6">
                       <TextFieldGroup
                        label="Last Name"
                        type="text"
                        field="lname"
                        onChange={(e)=>this.setState({lname:e.target.value})}
                        value={this.state.lname}
                        error={errors.lname}
                        className="remove-border"
                        />
                       </div>
                   </div>

                   <TextFieldGroup
                        label="Brand Name"
                        type="text"
                        field="brand"
                        onChange={(e)=>this.setState({brand:e.target.value})}
                        value={this.state.brand}
                        error={errors.brand}
                        className="remove-border"
                        />

                   <div className="row">
                       <div className="col-sm-12 col-md-6">
                       <TextFieldGroup
                        label="Phone"
                        type="number"
                        field="phone"
                        onChange={(e)=>this.setState({phone:e.target.value})}
                        value={this.state.phone}
                        error={errors.phone}
                        className="remove-border"
                        />
                       </div>
                       <div className="col-sm-12 col-md-6">
                       <TextFieldGroup
                        label="Email"
                        type="text"
                        field="email"
                        onChange={(e)=>this.setState({email:e.target.value})}
                        value={this.state.email}
                        error={errors.email}
                        className="remove-border"
                        />
                       </div>
                   </div>

                   <div className="row">
                       <div className="col-sm-12 col-md-6">
                       <TextFieldGroup
                        label="Password"
                        type="password"
                        field="password"
                        onChange={(e)=>this.setState({password:e.target.value})}
                        value={this.state.password}
                        error={errors.password}
                        className="remove-border"
                        />
                       </div>
                       <div className="col-sm-12 col-md-6">
                       <TextFieldGroup
                        label="Confirm Password"
                        type="password"
                        field="confrom-passowrd"
                        onChange={(e)=>this.setState({cPassword:e.target.value})}
                        value={this.state.cPassword}
                        error={errors.cPassword}
                        className="remove-border"
                        />
                       </div>
                   </div>
                   <div className="form-group">
                       <button className="btn btn-dark">Sign up</button>
                    </div>
                    <span>Already have an Account? <Link to="/login">Sign in</Link></span>
               </form>
               }
           </div>
       );
    }
}

SignupForm.propTypes = {
   userSignupRequest: PropTypes.func.isRequired,
   addFlashMessage: PropTypes.func.isRequired
};

export default SignupForm; 