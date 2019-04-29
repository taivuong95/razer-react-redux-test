import React, { Component } from 'react';
import './App.css';
import Profile from '../Profile/Profile';
import Content from '../Content/Content';
// import Link from '../../components/Link/Link'
class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="thx-wrapper flex">
          <Profile />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
