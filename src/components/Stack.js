import React from 'react';
import StackService from './StackService';

const data = {
  stackName: "Stack Name",
  stackDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
};

const stackContainerStyles = {
  display: 'flex',
};

const stackStyles = {
margin: 10,
padding: '15px',
maxWidth: 400,
};

export default class Stack extends React.Component {

  render() {

    console.log("this in Stack:   ", this);
    return (
      <section className="stack-container row" style={stackContainerStyles}>
        <div className="stack" style={stackStyles} >
          <h1>{data.stackName}</h1>
          <p className="stack-describe">{data.stackDescription}</p>
        </div>
        < StackService />
      </section>
    );
  }
}
