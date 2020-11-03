import "./App.css";
import ToggleButton from "react-toggle-button";
import React, { Component } from "react";
import SvgMotorcycle from "./Motorcycle";
import fetch from "./fetchWithTimeout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: 1000,
      headlightOn: false,
      turnL: false,
      turnR: false,
      brake: false,
      highbeam: false,
      neutral: false,
    };
  }

  setStates = (state) => {
    state.headlightOn = true;
    console.debug("State:", state);
    this.setState(state);
  };

  refreshStates = () => {
    fetch("/states", {}, this.state.timeout)
      .then((res) => res.json())
      .then((state) => this.setStates(state), ()=> this.setState({headlightOn:false}));
  }

  componentDidMount = () => {
    console.debug("Component updated.");
    this.refreshStates();
    setInterval(() => {
      this.refreshStates();
    }, this.state.timeout * 3);
  };

  motorcycleStatusClasses = () => {
    var classes = [];

    if(this.state.turnL) classes.push("turn-left-on");
    if(this.state.turnR) classes.push("turn-right-on");
    if(!this.state.brake) classes.push("brake-off");
    if(this.state.highbeam) classes.push("highbeam-on");

    return classes.join(" ");
  }

  handleStateChangeTurnL = (isOn) => {
    fetch("/turnL", { method: "PUT", body: isOn ? "0" : "1" })
      .then((res) => res.json())
      .then((state) => this.setStates(state));
  };

  handleToggleTurnL = () => {
    this.handleStateChangeTurnL(this.state.turnL);
  };

  handleStateChangeTurnR = (isOn) => {
    fetch("/turnR", { method: "PUT", body: isOn ? "0" : "1" })
      .then((res) => res.json())
      .then((state) => this.setStates(state));
  };

  handleToggleTurnR = () => {
    this.handleStateChangeTurnR(this.state.turnR);
  };

  handleStateChangeHighbeam = (isOn) => {
    fetch("/highbeam", { method: "PUT", body: isOn ? "0" : "1" })
      .then((res) => res.json())
      .then((state) => this.setStates(state));
  };

  handleToggleHighbeam = () => {
    this.handleStateChangeHighbeam(this.state.highbeam);
  };

  handleStateChangeBrake = (isOn) => {
    fetch("/brake", { method: "PUT", body: isOn ? "0" : "1" })
      .then((res) => res.json())
      .then((state) => this.setStates(state));
  };

  handleToggleBrake = () => {
    this.handleStateChangeBrake(this.state.brake);
  };

  handleStateChangeNeutral = (isOn) => {
    fetch("/neutral", { method: "PUT", body: isOn ? "0" : "1" })
      .then((res) => res.json())
      .then((state) => this.setStates(state));
  };

  handleToggleNeutral = () => {
    this.handleStateChangeNeutral(this.state.neutral);
  };

  handleStateChangeHazard = (isOn) => {
    fetch("/hazard", { method: "PUT", body: isOn ? "0" : "1"})
      .then((res) => res.json())
      .then((state) => this.setStates(state));
  };

  handleClickHazard = () => {
    this.handleStateChangeHazard(this.state.turnL && this.state.turnR);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SvgMotorcycle
          clickRight={this.handleToggleTurnR}
          clickLeft={this.handleToggleTurnL}
          clickHigh={this.handleToggleHighbeam}
          clickHazard={this.handleClickHazard}
          neutral={this.state.neutral}
          headlightOn={this.state.headlightOn}
          hazardOn={this.state.turnL && this.state.turnR}
          className={this.motorcycleStatusClasses()}
          id="Motorcycle"/>
          <h4>Left Turn Signal</h4>
          <ToggleButton
            value={this.state.turnL}
            onToggle={this.handleToggleTurnL}
          />
          <h4>Right Turn Signal</h4>
          <ToggleButton
            value={this.state.turnR}
            onToggle={this.handleToggleTurnR}
          />
          <h4>High Beam</h4>
          <ToggleButton
            value={this.state.highbeam}
            onToggle={this.handleToggleHighbeam}
          />
          <h4>Brake</h4>
          <ToggleButton
            value={this.state.brake}
            onToggle={this.handleToggleBrake}
          />
          <h4>Neutral</h4>
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
