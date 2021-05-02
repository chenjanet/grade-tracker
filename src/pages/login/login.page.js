import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header.component';
import './login.css';

function Login() {
    return(
        <div className="login-wrapper">
            <Header text="Login" />
            <div className="card login-card mt-2 pt-3 pb-3 col-8 mx-auto hv-center justify-content-center">
                <form> 
                    <div className="form-group text-left">
                        <label for="username">Username</label>
                        <input type="text" className="form-control" id="loginUsername" aria-describedby="usernameHelp" placeholder="Enter username" />
                    </div>
                    <div className="form-group text-left">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                    </div>
                </form>
                <button type="submit" className="btn btn-dark">Log in</button>
            </div>
            <Link to="/register">Register a new account</Link>
        </div>
    );
}

export default Login;