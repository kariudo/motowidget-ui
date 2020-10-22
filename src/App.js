import './App.css';
import ToggleButton from 'react-toggle-button';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { turnL: false, turnR: false, brake: false, highbeam: false, neutral: false };
  }

  setStates = (state) => {
    console.log("State:", state);
    this.setState(state);
  }

  componentDidMount = () => {
    console.log("Component mounted.", this.state);
    fetch('/states')
      .then(res => res.text())
      .then(state => this.setStates(state));
  }

  handleStateChangeTurnL = (isOn) => {
    fetch('/turnL', { method: 'PUT', body: isOn ? '0' : '1' })
      .then(res => res.json())
      .then(state => this.setStates(state));
  }

  handleToggleTurnL = () => {
    this.handleStateChangeTurnL(this.state.turnL);
  }

  handleStateChangeTurnR = (isOn) => {
    fetch('/turnR', { method: 'PUT', body: isOn ? '0' : '1' })
      .then(res => res.json())
      .then(state => this.setStates(state));
  }

  handleToggleTurnR = () => {
    this.handleStateChangeTurnR(this.state.turnR);
  }

  handleStateChangeHighbeam = (isOn) => {
    fetch('/highbeam', { method: 'PUT', body: isOn ? '0' : '1' })
      .then(res => res.json())
      .then(state => this.setStates(state));
  }

  handleToggleHighbeam = () => {
    this.handleStateChangeHighbeam(this.state.highbeam);
  }

  handleStateChangeBrake = (isOn) => {
    fetch('/brake', { method: 'PUT', body: isOn ? '0' : '1' })
      .then(res => res.json())
      .then(state => this.setStates(state));
  }

  handleToggleBrake = () => {
    this.handleStateChangeBrake(this.state.brake);
  }

  handleStateChangeNeutral = (isOn) => {
    fetch('/neutral', { method: 'PUT', body: isOn ? '0' : '1' })
      .then(res => res.json())
      .then(state => this.setStates(state));
  }

  handleToggleHighbeam = () => {
    this.handleStateChangeNeutral(this.state.neutral);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Left Turn Signal</h3>
          <ToggleButton
            value={this.state.turnL}
            onToggle={this.handleToggleTurnL}
          />
          <h3>Right Turn Signal</h3>
          <ToggleButton
            value={this.state.turnR}
            onToggle={this.handleToggleTurnR}
          />
          <h3>High Beam</h3>
          <ToggleButton
            value={this.state.highbeam}
            onToggle={this.handleToggleHighbeam}
          />
          <h3>Brake</h3>
          <ToggleButton
            value={this.state.brake}
            onToggle={this.handleToggleBrake}
          />
          <h3>Neutral</h3>
          <ToggleButton
            value={this.state.neutral}
            onToggle={this.handleToggleNeutral}
          />
        </header>
      </div>
    );
  }
}

export default App;
