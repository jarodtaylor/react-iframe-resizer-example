import React, { Component } from 'react';
import ReactIframeResizer from 'react-iframe-resizer-super';
import './App.css';

class App extends Component {
  render() {
    const iframeResizerOptions = { checkOrigin: false };
    return (
      <div className="App2">
        <div className="header"><div className="contain">Header (not part of iframe)</div></div>
        <div className="contain">
          <div className="left-col">
            <ReactIframeResizer src="/login.html" iframeResizerOptions={iframeResizerOptions}/>
          </div>
          <div className="right-col">
            Right Column (not part of iframe)
          </div>
        </div>
        <div className="footer"><div className="contain">Footer (not part of iframe)</div></div>
      </div>
    );
  }
}

export default App;
