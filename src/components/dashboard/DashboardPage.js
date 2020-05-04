import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';                                                                                                
import { logout } from '../../redux/actions';
import FlashMessageList from '../flash/FlashMessageList';
import AuthNavbar from '../layout/AuthNavbar';


class DashboardPage extends React.Component{
                           
    render(){
        const { isAuthenticated, user } = this.props.auth;
        
        const userLinks = (
            <div>
                <h1>hello</h1>
            </div>
        );
        const gustLinks = (
           <AuthNavbar/>
        );
        return(
            <div>
                {isAuthenticated ? userLinks : gustLinks}
                <FlashMessageList />
            </div>
        );
    }
}

DashboardPage.propTypes = {
   auth: PropTypes.object.isRequired,
   logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps,{logout})(DashboardPage);