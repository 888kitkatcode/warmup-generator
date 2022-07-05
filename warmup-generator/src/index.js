import React from 'react';
import ReactDOM from 'react-dom';
import FortuneWheel from './wheel/FortuneWheel';
import warmupsData from './data';

import './index.css';

export class App extends React.Component {
  constructor() {
    super();
    this.warmupsData = warmupsData;
  }

  render() {
    return (
      <div className="App">
        <h1>Warm Up Wheel of Fortune!</h1>
        <FortuneWheel 
          items={this.warmupsData.map(warmup => warmup.heading)} 
          instructions={this.warmupsData.map(warmup => warmup.instructions)}
          time={this.warmupsData.map(warmup => warmup.time)}
          language={this.warmupsData.map(warmup => warmup.language)}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
