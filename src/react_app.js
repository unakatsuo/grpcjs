import React from 'react';
import ReactDOM from 'react-dom';
import {Component1} from './component1';

class PageReact extends React.Component {
  render() {
    return (
      <Component1 />
    );
  }
}

ReactDOM.render(<Component1 />, document.getElementById('app'));