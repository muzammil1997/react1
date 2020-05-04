import React from 'react';
import { Link } from 'react-router-dom';

class AuthNavbar extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">POS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/event">Home <span className="sr-only">(current)</span></Link>
                    </li>
                  
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/signup">Sign Up </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/signin">Sign in</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
}

export default AuthNavbar;