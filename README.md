# Exp 8 Create a BMI Calculator using React
## AIM:
To create react app to develop a complete BMI Calculator application.
## PROCEDURE:
### STEP 1:
Create react app by npm create-react-app.
### STEP 2:
Make changes to App.js where the bmi calculator works.
### STEP 3:
Include Style in the react using app.css and import it to App.js.
### STEP 4:
Verify the output by running the Web-Layout in any web browser. 
## PROGRAM:
### App.css
```css
.bmi-calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.input-container label {
  margin-right: 1rem;
  font-size: 1.2rem;
}

.input-container input {
  width: 150px;
  height: 30px;
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  width: 150px;
  height: 40px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.result {
  width: 250px;
  background-color: #f2f2f2;
  padding: 1rem;
  font-size: 1.2rem;
  text-align: center;
}

.bmi {
  font-weight: bold;
}

.category {
  margin-top: 0.5rem;
}
```
### App.js
```js
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
```
### index.css
```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
```
### index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
## OUTPUT:
![image](https://github.com/Karthikeyan21001828/MERN_EX08/assets/93427303/1b01d221-3cd1-43b1-af7f-4c2be1491df8)

## RESULT:
React app to develop a complete BMI calculator application has been created and output has been verified.
