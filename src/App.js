import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/login/login.page';
import Home from './pages/home/home.page';
import Register from './pages/register/register.page';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
          <Redirect to="/login" />
        </BrowserRouter>
    );
      
  }

  return (
    <div className="wrapper">
      <h1>Grade tracker</h1>
        
    </div>
  );
}

export default App;
