import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAgreed, setIsAgreed] = useState(false);

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const handleCheckboxChange = () => {
    setIsAgreed((prevIsAgreed) => !prevIsAgreed);
  };

  const handleSubmit = () => {
    // Perform login or signup logic here
    console.log('Form submitted!');
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <div className="loginsignup-fields">
          {!isLogin && <input type="text" placeholder='Your Name' />}
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button onClick={handleSubmit} disabled={!isAgreed}>
          {isLogin ? 'Login' : 'Continue'}
        </button>
        <p className='loginsignup-login'>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <span onClick={toggleForm}>
            {isLogin ? 'Sign up here' : 'Login here'}
          </span>
        </p>
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            id="termsCheckbox"
            checked={isAgreed}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="termsCheckbox">
            By continuing, I agree to the terms of use & privacy policy
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;