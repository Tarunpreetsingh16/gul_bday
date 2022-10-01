import './App.css';
import React, { useState } from 'react';
import Landing from './pages/Landing';
import MainObjects from './pages/MainObjects';

function App() {
  const [step, setStep] = useState(1)
  
  const updateStep = () => {
    setStep(step + 1)
  }

  return (
    <div>
      <div id="desktopSite">
        <Landing updateStep={updateStep} step={step}/>
        <MainObjects updateStep={updateStep} step={step} />
      </div>
    </div>
  );
}

export default App;
