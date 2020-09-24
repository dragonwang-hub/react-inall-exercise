import React from 'react';
import homeimg from '../images/hero-image.png';
import calimg from '../images/calculator.png';
import timerimg from '../images/timer.png';
import './home.less';

const Home = () => {
  return (
    <div className="home">
      <div className="homeimg">
        <img src={homeimg} alt="Home" width="600" height="300"/>
        <h1>在线实用工具</h1>
      </div>
      <div>
        <div className="calculator">
          <img src={calimg} alt="calimg" width="200" height="200"/>
          <a href='./calculator'>计算器</a>
        </div>
        <div className="timer">
          <img src={timerimg} alt="timerimg" width="200" height="200"/>
          <a href='./countdowntimer'>倒计时器</a>
        </div>
      </div>
    </div>
  );
};

export default Home;