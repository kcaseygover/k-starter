import React from 'react';
import StackService from './StackService';
import Stack from './Stack';

import logo from '../logo.svg';


const styles = {
  container: {
    display: 'flex',
    margin: '40px',
  },
};

export default class StackContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {this}
  }

  render() {
    console.log("this.props.thing in container: ", this.props.thing)
    console.log("this.state in StackContainer:   ", this);
    return (
      <section style={styles.container}>
        <Stack    />
        <StackService services= {this.props.services}/>
      </section>
    );
  }
}

