import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header.component';

import './register.css';

export default function Register() {
    return(
        <div className="register-wrapper">
            <Header text="Sign up" />
            <div className="card login-card mt-2 pt-3 pb-3 col-8 mx-auto hv-center justify-content-center">
                <form> 
                    <div className="form-group text-left">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="registerUsername" aria-describedby="usernameHelp" placeholder="Enter username" />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="registerPassword" placeholder="Password" />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
                    </div>
                    <button type="submit" className="btn btn-dark">Sign up</button>
                </form>
            </div>
            <Link to="/login">Login a preexisting account</Link>
        </div>
    );
}