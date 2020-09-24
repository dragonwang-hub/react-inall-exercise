import React, { Component } from 'react';
import './calculator.less';

class Butkey extends Component {
  render() {
    return (
      <input
        className="btnkey"
        value={this.props.value}
        onClick={() => this.props.handlePush(this.props.value)}
        readOnly
      />
    );
  }
}

export default Butkey;