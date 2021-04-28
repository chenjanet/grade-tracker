import React, {useState} from 'react';
import axios from 'axios';

function RegistrationForm(props) {
    const [state, setState] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSignupClick = (e) => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendToServer();
        } else {
            props.showError("Error: passwords do not match");
        }
    }

    const sendToServer = () => {

    }

    return(
        <div className="card login-card mt-2 pt-3 pb-3 col-8 mx-auto hv-center justify-content-center">
            <form> 
                <div className="form-group text-left">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
                </div>
                <div className="form-group text-left">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-group text-left">
                    <label for="confirmPassword">Confirm password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
                </div>
            </form>
            <button type="submit" className="btn btn-dark" onClick={handleSignupClick}>Sign up</button>
        </div>
    )
}

export default RegistrationForm;