import waelthylogo from '../public/waelthylogo.svg';
import phoneimage from '../public/phone-image.png';
import phoneplansimage from '../public/phoneplansimage.png';
import phoneanalytics from '../public/phoneanalytics.png';
import instagramicon from '../public/instagram-icon.svg';
import twittericon from '../public/twitter-icon.svg';
import telegramicon from '../public/telegram-icon.svg';
import './styles/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';

const Home: React.FC = () => {
``
  return (
    <div className='main'>
      <div>
        <header className='waelthyheader'>
            <div className='headerdisplay'>
              <img src={waelthylogo} alt='Waelthylogo'/>
              <span className='wealthytext'>Waelthy</span>
            </div>
            
            <header className='headerstyle'>
              Saving Targets
            </header>
            <br></br>
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
        </div>

        <div className='container container-spacing'>
          <div className='container-second-text'>
            <header className='headerstyle'>
              Analytics
            </header>
            <br></br>
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
          <img src={phoneanalytics} alt='phoneanalytics' className='phone-image'/>
        </div>

        <div className='align-container'>
          <div>
            <header className='headerstyle'>
              Our Newsletter
            </header>
            <br></br>
            <span>
            Don't miss your chance to take control of your financial future! 
            Sign up for our newsletter today and be among the first to know when the Waelthy app launches. 
            Plus, you'll get exclusive tips to help improve your personal finances, grow your wealth, and move closer to financial independence.  
            Make a smart investment in your future - subscribe now!
            </span>
            <br></br>
            <div>
            <br></br>
            <input type='text' className='input' placeholder='Enter your email'>
            </input>
            </div>
            <br></br>
            <button type='button' className='larger-button' >Subscribe</button>
          </div>    
        </div>

        <footer>
          <div className='footerdisplay'>
            <div>
            <img src={waelthylogo} alt='Waelthylogo'/>
            <span className='wealthytext'>Waelthy</span>
            </div>
            <div className='footer-align'>
            <span className='selected-children text-style'>Visit our Blog</span>
            <Link to="/signin">
            <span className='selected-children text-style'>Sign In</span>
            </Link>
            <Link to="/signup">
            <span className='text-style'>Sign Up</span>
            </Link>
            </div>
            <div className='footer-align-icon'>
            <img src={instagramicon} className='selected-child' alt='Instagramicon'/>
            <img src={twittericon} className='selected-child' alt='Twittericon'/>
            <img src={telegramicon} alt='Telegramicon'/>
            </div>
          </div>
          <div className='footerdisplay'>
            <span>Copyright 2021. All rights reserved</span>
            <div className='footer-align'>
            <span className='selected-children'>Terms of service</span>
            <span className='selected-children'>Privacy Policy</span>
            </div>
          </div>
        </footer>
      </div>    
    </div>
  )
}

export default Home

