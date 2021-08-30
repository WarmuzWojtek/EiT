import React from 'react';

import './styles/App.css';
import Button from '../components/Button/Button.jsx'
import StartBcg from '../components/StartBackground/StartBcgDesktop.jsx'
import StartPage from '../Pages/StartPage.jsx'

function App() {
  return (
    <div className="App">
      <StartPage/>
      {/* <StartBcg>

     </StartBcg> */}
    </div>
  );
}

export default App;
