import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header.component';
import './register.css';

function Register() {
    return(
        <div className="register-wrapper">
            <Header text="Sign up" />
            <div className="card login-card mt-2 pt-3 pb-3 col-8 mx-auto hv-center justify-content-center">
                <form> 
                    <div className="form-group text-left">
                        <label for="username">Username</label>
                        <input type="text" className="form-control" id="registerUsername" aria-describedby="usernameHelp" placeholder="Enter username" />
                    </div>
                    <div className="form-group text-left">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="registerPassword" placeholder="Password" />
                    </div>
                    <div className="form-group text-left">
                        <label for="confirmPassword">Confirm password</label>
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
                    </div>
                </form>
                <button type="submit" className="btn btn-dark">Sign up</button>
            </div>
            <Link to="/login">Login a preexisting account</Link>
        </div>
    );
}

export default Register;