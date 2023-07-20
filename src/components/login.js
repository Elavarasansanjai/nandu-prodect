import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './store/script';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { abdateStatus } from './store/script';
const LogIn = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const [passWord, setPassWord] = useState('');
  const [message, setMessage] = useState('');
  const [err, setErr] = useState(false);
  const users = useSelector(({ users }) => users.users);
  const navigate = useNavigate();
  const status = useSelector(({ status }) => status.status);
  const statusDispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    setErr(false);
    const exists = users.find((item) => item.name === name);
    console.log(exists);
    console.log(
      exists ? exists.name === name && exists.passWord === passWord : false
    );
    if (exists ? exists.name === name && exists.passWord === passWord : false) {
      statusDispatch(abdateStatus('submiting...'));
      dispatch(
        login({
          name,
          passWord,
        })
      );
      statusDispatch(abdateStatus(''));
      navigate('/root');
    } else {
      setMessage(true);
    }
  };
  return (
    <div className="signin-container">
      <div className="signin-form">
        <h1>LogIn page</h1>
        <form onSubmit={submitHandler} className="form">
          <div>
            <label>Name :</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="enter your name"
            />
            {err && <p>name must be strings</p>}
          </div>
          <div>
            <label>Password :</label>
            <input
              onChange={(e) => setPassWord(e.target.value)}
              type="password"
              placeholder="enter your password"
            />
          </div>
          <button>{status ? status : 'Submit'}</button>
        </form>
        {message && <p>Name or Password is error</p>}
        <p>
          you are a new to Nandu Prodects <Link to="/">go sign up</Link>
        </p>
      </div>
    </div>
  );
};
export default LogIn;
