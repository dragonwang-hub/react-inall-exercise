import React, { Component } from 'react';

class CountdownTimer extends Component {
  state = {
    time: 0,
    restTime: 0,
    timeHandle: "",
    display: "START",
  };

  handleFieldChange = (field, event) => {
    this.setState({
      [field]: event.target.value,
      display: "START",
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
    this.setState({
      restTime: +this.state.time,
    });
  };

  startTimer = (e) => {
    e.preventDefault();
    this.setState({
      restTime: +this.state.time,
    });
    this.state.timeHandle = setInterval(this.handleTimerClick, 1000)
  }
  handleTimerClick = () => {
    this.setState({
      restTime: this.state.restTime - 1,
    });
    this.setState({
      display: this.state.restTime + 'Seconds',
    });
    if (this.state.restTime === 0) {
      clearInterval(this.state.timeHandle);
      this.setState({
        display: "END",
      });
    }
  }

  render() {
    return (
      <div className="timer container">
        <h1>在线倒计时器</h1>
        <form className="my_profile" onSubmit={this.startTimer}>
          <div className="form-group">
            <label htmlFor="setup">设置时间</label>
            <input
              type="number"
              id="setup"
              value={this.state.time}
              onChange={(e) => this.handleFieldChange("time", e)}
            />
          </div>
          <div className="form-group">
            <input
              disabled={(this.state.time <= 0) || (this.state.restTime != 0)}
              type="submit"
              value="Start"
              className="btn btn-primary"
            />
          </div>
          <div className="form-group">
            <p className="timerShow">
              {this.state.display}
            </p>
          </div>
        </form>
        <div className="form-group">
          <button
            className="btn btn-link"
            styles="width: 18em;"
            onClick={() => this.props.history.push('/')}
          >
            回到主页
            </button>
        </div>
      </div>
    );
  };
}

export default CountdownTimer;