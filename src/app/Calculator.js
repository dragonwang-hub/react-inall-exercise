import React, { Component } from 'react';
import './calculator.less';
import Butkey from './Butkey';

class Calculator extends Component {

  state = {
    expression: "",
    buttons: ['+', '-', 'x', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', 'Clear', '='],
  };

  handlePushToExpression = (btnkey) => {
    console.log(btnkey);
    switch (btnkey) {
      case 'Clear':
        this.setState({
          expression: "",
        });
        break;

      case '=':
        const expressionRegular = this.state.expression.replace('x', '*');
        try {
          this.setState({
            expression: eval(expressionRegular),
          });
        }
        catch (ex) {
          this.setState({
            expression: "",
          });
        }
        break;

      default:
        this.setState({
          expression: this.state.expression + btnkey,
        });
        break;
    }
  };

  render() {
    return (
      <div className="calculator">
        <h1>在线计算器</h1>
        <div className="container">
          <div className="result">
            <input
              disabled
              value={this.state.expression}
            />
          </div>
          <div className="keybuttons">
            {
              this.state.buttons.map(butkey =>
                <Butkey
                  key={butkey}
                  value={butkey}
                  className="btnkey"
                  handlePush={this.handlePushToExpression}
                >
                  {butkey}
                </Butkey>
              )
            }
          </div>
        </div>
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

export default Calculator;