import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header.component';

import './register.css';

async function registerUser(creds) {
    return axios.post('http://localhost:5000/auth/register', creds)
                .then(res => res.data);
}

export default function Register({setToken}) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [passwordsMatch, setPasswordsMatch] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        if (confirmPassword !== password) {
            setPasswordsMatch("Error: passwords do not match. Please resubmit.");
            return;
        } else {
            setPasswordsMatch("");
        }
        const token = await registerUser({
            username,
            password
        });
        setToken(token);
    }
    return(
        <div className="register-wrapper">
            <Header text="Sign up" />
            <div className="card login-card mt-2 pt-3 pb-3 col-8 mx-auto hv-center justify-content-center">
                <form onSubmit={handleSubmit}> 
                    <div className="form-group text-left">
                        <label htmlFor="registerUsername">Username</label>
                        <input type="text" className="form-control" id="registerUsername" placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="registerPassword">Password</label>
                        <input type="password" className="form-control" id="registerPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="registerConfirmPassword">Confirm password</label>
                        <input type="password" className="form-control" id="registerConfirmPassword" placeholder="Confirm password" onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                    <p id="passwordsMatch">{passwordsMatch}</p>
                    <button type="submit" className="btn btn-dark">Sign up</button>
                </form>
            </div>
            <Link to="/login">Login a preexisting account</Link>
        </div>
    );
}

Register.propTypes = {
    setToken: PropTypes.func.isRequired
}