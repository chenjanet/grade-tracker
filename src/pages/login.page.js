import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './pages.css';

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
            <div className='login-form-wrapper'>
                <div className='card login-card mt-2 mb-2 pt-3 pb-3 pr-3 pl-3'>
                    <form onSubmit={handleSubmit}> 
                        <div className='form-group text-left'>
                            <label htmlFor='username'>Username</label>
                            <input type='text' className='form-control' id='loginUsername' placeholder='Enter username' onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className='form-group text-left'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' className='form-control' id='loginPassword' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type='submit'><FontAwesomeIcon icon='sign-in-alt' /> Log in</button>
                    </form>
                </div>
                <Link to='/register'>Sign up</Link>
            </div>
            
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}