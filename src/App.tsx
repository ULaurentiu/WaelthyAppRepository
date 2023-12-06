import './styles/style.css';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import React from 'react';
import SignupPage from './components/signup-component/signup';
import SignInPage from './components/signin-component/signin';
import MainMenuPage from './components/mainmenu-component/mainmenu';
import Home from './Home';

const App: React.FC = () => {

  return (  
    <Router>
    <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/signin' Component={SignInPage}/>
    <Route path='/signup' Component={SignupPage}/>
    <Route path='/mainmenu' Component={MainMenuPage}/>
    </Routes>
    </Router>
  )
}

export default App

