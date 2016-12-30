import React from 'react';

export default class Service extends React.Component {

  render() {

    console.log("this in Service:   ", this);
    return (
      <div>
        <h1>Service Component</h1>
      </div>
    );
  }
}
