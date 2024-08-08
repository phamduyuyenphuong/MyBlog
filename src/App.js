import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'; 
import iconGoogle from './images/icons/icon-google.png';
import Main from './Main/main'; 
import './App.css';

const Login = ({ handleChangeEmail, handleLogin }) => {
  return (
    <div className="container">
    <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
      <form className="login100-form validate-form">
        <span className="login100-form-title p-b-37">
          Sign In
        </span>
        <div className="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
          <input className="input100" type="text" name="username" placeholder="username or email" onChange={handleChangeEmail} />
          <span className="focus-input100"></span>
        </div>
        <div className="wrap-input100 validate-input m-b-25" data-validate="Enter password">
          <input className="input100" type="password" name="pass" placeholder="password" />
          <span className="focus-input100"></span>
        </div>
        <div className="container-login100-form-btn">
          <button className="login100-form-btn" onClick={handleLogin}>
            Sign In
          </button>
        </div>
        <div className="text-center p-t-57 p-b-20">
          <span className="txt1">
            Or login with
          </span>
        </div>
        <div className="flex-c p-b-112">
          <a href="#" className="login100-social-item">
          <FontAwesomeIcon
              icon={faFacebookF} 
              className="fa fa-facebook-f" 
            />
          </a>
          <a href="#" className="login100-social-item">
            <img className='icon-gg' src={iconGoogle} alt='GOOGLE' />
          </a>
        </div>
        <div className="text-center">
          <a href="#" className="txt2 hov1">
            Sign Up
          </a>
        </div>
      </form>
    </div>
    </div>
  );
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleChangeEmail = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
        <Routes>
          <Route path="/" element={!loggedIn ? <Login handleChangeEmail={handleChangeEmail} handleLogin={handleLogin} /> : <Main/>} />
        </Routes>
    </Router>
  );
}

export default App;
