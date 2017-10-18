import React, { Component } from 'react';
import Count from './Count';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const XPage = text => () => <h1>{text}</h1>;

const HomePage = () => <h1>Home Page</h1>;
const RootPage = () => <h1>Root Page</h1>;

export default class RouterExamples extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>I always show up</h1>
          <Route exact path="/" component={RootPage} />
          <Route path="/home" component={HomePage} />
          <Link to="/" style={{ marginRight: 5 }}>Root</Link>
          <Link to="/home">Home</Link>
        </div>
      </BrowserRouter>
    );
  }
}
