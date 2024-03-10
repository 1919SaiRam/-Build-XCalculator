import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const calculatedResult = evaluateExpression(input);
        setResult(calculatedResult);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const evaluateExpression = (expr) => {
    const result = eval(expr);
    if (result === Infinity) {
      return 'Infinity';
    } else if (Number.isNaN(result)) {
      return 'NaN';
    }
    return result;
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {[...Array(10).keys(), '+', '-', '*', '/', '='].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;

