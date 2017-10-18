import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Count from './Count';
import RouterExamples from './RouterExamples';

// class HelloClicked extends Component {
  // state = {
    // isClicked: false,
  // }

  // handleClick = () => {
    // this.setState({ isClicked: !this.state.isClicked })
  // }

  // render() {
    // return (
      // <h1 onClick={this.handleClick}>
      // {this.props.saying} {this.state.isClicked && 'Clicked'}
      // </h1>
    // );
  // }
// }

// const Hello = ({ saying }) => {
  // return (
    // <h1>{saying}</h1>
  // );
// };

ReactDOM.render(<RouterExamples />, document.getElementById('root'));
registerServiceWorker();
