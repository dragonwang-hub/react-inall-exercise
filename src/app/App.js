import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator";
import CountdownTimer from "./CountdownTimer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <nav className="navbar navbar-dark bg-primary bg-light">
            <Link to="/" className="nav-link" id="nav-first">
              Home
            </Link>
            <Link to="/calculator" className="nav-link">
              在线计算器
            </Link>
            <Link to="/countdowntimer" className="nav-link">
              在线倒计时器
            </Link>
          </nav>
          <Switch>
            <Route exact path="/calculator" component={Calculator} />
            <Route exact path="/countdowntimer" component={CountdownTimer} />

            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
