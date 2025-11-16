import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleCalculate = () => {
    try {
      // Safer than eval(), but still limited — good enough for a small demo
      // eslint-disable-next-line no-new-func
      const calculate = new Function('return ' + display);
      setDisplay(calculate().toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('');
  };

  return (
    <div className="calculator">
      <div className="display">{display || '0'}</div>
      <div className="buttons">
        <button onClick={handleClear} className="button clear">C</button>
        <button onClick={() => handleClick('/')} className="button operator">÷</button>
        <button onClick={() => handleClick('*')} className="button operator">×</button>

        <button onClick={() => handleClick('7')} className="button">7</button>
        <button onClick={() => handleClick('8')} className="button">8</button>
        <button onClick={() => handleClick('9')} className="button">9</button>
        <button onClick={() => handleClick('-')} className="button operator">−</button>

        <button onClick={() => handleClick('4')} className="button">4</button>
        <button onClick={() => handleClick('5')} className="button">5</button>
        <button onClick={() => handleClick('6')} className="button">6</button>
        <button onClick={() => handleClick('+')} className="button operator">+</button>

        <button onClick={() => handleClick('1')} className="button">1</button>
        <button onClick={() => handleClick('2')} className="button">2</button>
        <button onClick={() => handleClick('3')} className="button">3</button>
        <button onClick={handleCalculate} className="button equal">=</button>

        <button onClick={() => handleClick('0')} className="button zero">0</button>
        <button onClick={() => handleClick('.')} className="button">.</button>
      </div>
    </div>
  );
}

export default App;
