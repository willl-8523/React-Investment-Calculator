import React, { useState } from 'react';

const INTIAL_USER_INPUT = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 10,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(INTIAL_USER_INPUT);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(INTIAL_USER_INPUT);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevUserInput) => {
      // prevUserInput = {...prevUserInput, [input]: value}
      // console.log(prevUserInput);
      return {
        ...prevUserInput,
        [input]: value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) =>
              inputChangeHandler('current-savings', e.target.value)
            }
            type="number"
            id="current-savings"
            value={userInput['current-savings']}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) =>
              inputChangeHandler('yearly-contribution', e.target.value)
            }
            type="number"
            id="yearly-contribution"
            value={userInput['yearly-contribution']}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(e) =>
              inputChangeHandler('expected-return', e.target.value)
            }
            type="number"
            id="expected-return"
            value={userInput['expected-return']}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => inputChangeHandler('duration', e.target.value)}
            type="number"
            id="duration"
            value={userInput.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
