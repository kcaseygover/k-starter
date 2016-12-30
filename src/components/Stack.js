import React from 'react';
import Service from './Service';

export default class Stack extends React.Component {

  render() {

    console.log("this in Stack:   ", this);
    return (
      <div>
        <h1>Stack Component</h1>
        < Service />
      </div>
    );
  }
}
