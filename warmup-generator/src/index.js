// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

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
