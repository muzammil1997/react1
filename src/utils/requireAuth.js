import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addFlashMessage} from '../redux/actions';
import history from '../history';

export default  (ComposedComponent) => {

    class Authenticate extends React.Component{

        componentDidMount(){
            if(!this.props.isAuthenticated){
                this.props.addFlashMessage({
                    type: 'error',
                    text: 'You need to sign in.'
                });
                history.push('/');
            }
           
        }
        
        componentDidUpdate(prevProps, prevState, snapShot){
            if(!prevProps.isAuthenticated){
                console.log(this.props.isAuthenticated)
                 history.push('/');
             }
        }

        render(){
            return(
                <ComposedComponent {...this.props} />
            );
        }
    }

   Authenticate.propTpyes = {
       addFlashMessage: PropTypes.func.isRequired,
       isAuthenticated: PropTypes.bool.isRequired
   };

   const mapStateToProps = (state) => {
       return{
           isAuthenticated: state.auth.isAuthenticated
       }
   };

   return connect(mapStateToProps,{ addFlashMessage })(Authenticate);

};