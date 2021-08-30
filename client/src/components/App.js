import React from 'react';

import './styles/App.css';
import Button from '../components/Button/Button.jsx'

function App() {
  return (
    <div className="App">
     <Button
    //  id={startBtnRef}
    //  onClick={handleStartClick}
     className='startBtn'
     content='NOW!'
     />
    </div>
  );
}

export default App;
