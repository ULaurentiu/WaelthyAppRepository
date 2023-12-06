import React from 'react';
import '../../styles/style.css';
import '../mainmenu-component/mainmenu-style.css'

const MainMenuPage: React.FC = () => {
    return (
      <div>
        <header>
            <img src="/waelthylogo.svg" alt="image" />
            <span className='wealthytext'>Waelthy</span>
        </header>
        <button>Week</button>
        <button>Month</button>
      </div>
    );
  };

export default MainMenuPage