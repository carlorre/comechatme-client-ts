import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { newUser } from '../actions';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    if (username.length < 1) {
      setError('Please enter a username');
      return;
    }
    axios.get(`https://comechatme.herokuapp.com/?username=${username}`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(newUser(username));
          setError('');
        }
      })
      .catch((err) => {
        if (err.response) setError(err.response.data);
        else setError(err.message);
      });
  };

  return (
    <main>
      <div className="login-container">
        <img className="logo" src="./images/chat-logo.png" alt="" />
        <form className="login-form-container" onSubmit={(e) => handleSubmit(e)}>
          <input className="login-input" onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="Choose a username" maxLength={14} />
          <input className="login-button" type="submit" value="Enter Chat" />
          <p>{error}</p>
        </form>
      </div>
    </main>
  );
};

export default Login;
