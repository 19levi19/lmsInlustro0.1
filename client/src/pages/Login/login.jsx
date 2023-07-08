import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
 
    axios
      .post('//localhost:5000/user/login', {
        "email" : email, 
        "password" : password,
        
      })
      .then(response => {
        // Handle successful login
        return response.data;
      })
      .then((data)=>{
          console.log(data);
      })
      .catch(error => {
        // Handle login error
        console.error('Login failed:', error);
      });
  };

  return (
    <div className="layout__content page-content">
      <div className="pt-32pt pt-sm-64pt pb-32pt">
        <div className="container page__container">
          <form onSubmit={handleSubmit} className="col-md-5 p-0 mx-auto">
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                className="form-control"
                placeholder="Your email address ..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Your password ..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-right">
                <a href="" className="small">Forgot your password?</a>
              </p>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
