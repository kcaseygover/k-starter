import React from 'react';
import Service from './Service';

export default class Stack extends React.Component {

  render() {

    console.log("this in Stack:   ", this);
    return (
      <section>
        <h1>Stack Name</h1>
        <p className="stack-describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.</p>
        < Service />
      </section>
    );
  }
}
