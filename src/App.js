import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiResult = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiResult);

    if (bmiResult < 18.5) {
      setCategory('Underweight');
    } else if (bmiResult >= 18.5 && bmiResult < 25) {
      setCategory('Normal Weight');
    } else if (bmiResult >= 25 && bmiResult < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <label htmlFor="weight">Weight (kg)</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="height">Height (cm)</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div className="result">
          <div className="bmi">BMI: {bmi}</div>
          <div className="category">Category: {category}</div>
        </div>
      )}
    </div>
  );
};

export default App;
