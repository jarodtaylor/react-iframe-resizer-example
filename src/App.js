import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="login-iframe-container">
          <iframe title="login" src="http://localhost:3000/login.html" width="440" height="330" />
        </div>
      </div>
    );
  }
}

export default App;
