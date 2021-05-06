import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header/header.component';

import '../pages.css';

async function loginUser(creds) {
    return axios.post('http://localhost:5000/auth/login', creds)
                .then(res => res.data);
}

export default function Login({setToken}) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username, 
            password
        });
        setToken(token);
    }

    return(
        <div className='login-wrapper'>
            <Header text='Login' />
            <div className='card login-card mt-2 pt-3 pb-3 col-8 mx-auto hv-center justify-content-center'>
                <form onSubmit={handleSubmit}> 
                    <div className='form-group text-left'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' className='form-control' id='loginUsername' placeholder='Enter username' onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className='form-group text-left'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='form-control' id='loginPassword' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className='btn btn-dark'>Log in</button>
                </form>
            </div>
            <Link to='/register'>Register a new account</Link>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}