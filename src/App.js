import './App.css';
import React, { useState } from 'react';
import Landing from './pages/Landing';
import MainObjects from './pages/MainObjects';

function App() {
  const [step, setStep] = useState(1)
  
  const updateStep = () => {
    setStep(step + 1)
  }

  const resetStep = () => {
    setStep(1)
  }

  return (
    <div>
      <div id="mobileSite">
        <Landing updateStep={updateStep} step={step}/>
        <MainObjects updateStep={updateStep} step={step} resetStep={resetStep}/>
      </div>
      <div id="desktopSite">
        Please open this on a desktop browser
      </div>
    </div>
  );
}

export default App;
