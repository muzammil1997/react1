import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions';
import FlashMessageList from '../flash/FlashMessageList';


class DashboardPage extends React.Component{
    
    onClick = () => {
        this.props.logout();
    }

    render(){
        const { isAuthenticated, user } = this.props.auth;
        
        const userLinks = (
            <div>
                <h1>hello</h1>
            </div>
        );
        const gustLinks = (
            <div>
            <Link to="/login">Sign in</Link>
            <Link to="/signup">Sign up</Link>
            </div>
        );
        return(
            <div>
                <button onClick={this.onClick} >Logout</button>
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