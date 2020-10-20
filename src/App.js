import React from 'react';
import './App.css';
import Button from './UI/Button';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="flex-row">
          <div className="content">
            <h3>Current Time</h3>
            <h1>12:23</h1>
          </div>
          <div className="content">
            <h3>Total streak Time</h3>
            <h1>121:23</h1>
          </div>
        </div>
        <div className="flex-row">
          <div className="content">
            <h3>Current Streak</h3>
            <h1>5</h1>
          </div>
          <div className="content">
            <h3>Maximum Streak</h3>
            <h1>15</h1>
          </div>
        </div>
        <div className="flex-row">
          <Button text="stop" />
        </div>
      </div>
    );
  }
}

export default App;
