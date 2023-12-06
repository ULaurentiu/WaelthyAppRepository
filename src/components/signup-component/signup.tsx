import React from 'react';
import '../../styles/style.css';
import '../signup-component/signup-style.css'
import { Link } from 'react-router-dom';

const SignupPage: React.FC = () => {
    return (
      <div>
        <header className='test'>
            <img src="/waelthylogo.svg" alt="image" />
            <span className='wealthytext'>Waelthy</span>
        </header>
        <div className='signup-main-container'>
          <div>
            <div className='title-container'>
              <span className='text-title'>Create Account</span>
              <div>
              <br></br>
              <span className='text-join'>Join our community</span>
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
              <div className='tez'>
                <span>Age</span>
                <div>
                  <input type='text' className='input-box' placeholder='Enter your Age'></input>
                </div>
                <span>Gender</span>
                <div>
                  <input type='text' className='input-box' placeholder='Enter your Gender'></input>
                </div>
              </div>
              <div  className='tezx'>
                <span>Marital Status</span>
                <div>
                  <input type='text' className='input-box' placeholder='Enter your Marital Status'></input>
                </div>
                <span>Dependents</span>
                <div>
                  <input type='text' className='input-box' placeholder='Dependents'></input>
                </div>
              </div>
            </div>
          </div>
          <div className='button-centre'>
          <div>
          <button type='button' className='header-button-signup'>Sign Up</button>
          </div>
          <span>Already have an account?</span>
          <Link to="/signin">
          <span>Sign In</span>
          </Link>
          </div>
        </div>
      </div>
    );
  };

export default SignupPage