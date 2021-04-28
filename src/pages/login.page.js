import React from 'react';
import Header from '../components/header.component';
import RegistrationForm from '../components/registrationform.component';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    render() {
        return (
            <div>
                <Header />
                <RegistrationForm />
            </div>
        )
    }
    //const add_new = <div></div>;
}

export default Login;