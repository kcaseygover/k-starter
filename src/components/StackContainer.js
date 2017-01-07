import React from 'react';
import StackService from './StackService';
import Stack from './Stack';

import FontAwesome from 'react-fontawesome';
import logo from '../logo.svg';

const data = {
  stackName: "Stack Name",
  stackDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
};

const styles = {
  container: {
    display: 'flex',
    margin: '40px',
  },
};

export default class StackContainer extends React.Component {

  render() {

    console.log("this.state in StackContainer:   ", this);
    return (
      <section className="stack-container row" style={styles.container}>
        <Stack />
        <StackService />
      </section>
    );
  }
}

