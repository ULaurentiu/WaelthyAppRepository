import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/style.css';
import '../signin-component/signin-style.css'

const SignInPage: React.FC = () => {
    return (
      <div>
        <header className='test'>
            <img src="/waelthylogo.svg" alt="image" />
            <span className='wealthytext'>Waelthy</span>
        </header>
        <div className='signup-main-container'>
          <div>
            <div className='title-container'>
              <span className='text-title'>Welcome Back</span>
              <div>
              <br></br>
              <span className='text-join'>Please enter your account details to log in</span>
              </div>
              </div>
            </div>
          <div>
            <div className='text-personal'>
            <span>Personal Details</span>
            </div>
            <div className='test-1'>
              <span>Full Name</span>
              <div>
                <input type='text' className='input-box' placeholder='Enter your Name and Surname'></input>
              </div>
              <span>Email</span>
              <div>
                <input type='text' className='input-box' placeholder='Enter your Email'></input>
              </div>
            </div>
          </div>
          <div className='button-centre'>
            <Link to="/signin">
            <span>Forgot Password?</span>
            </Link>
            <div>
            <Link to="/mainmenu">
              <button type='button' className='header-button-signup'>Log In</button>
            </Link>
            </div>
            <div>
            <span>OR</span>
            </div>
            <div>
            <button type='button'>Log In with Googl</button>
            </div>
            <span>Don't have an account?</span>
            <Link to="/signup">
            <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    );
  };

export default SignInPage