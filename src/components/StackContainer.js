import React from 'react';
import StackService from './StackService';
import Stack from './Stack';

import logo from '../logo.svg';

//StackContainer component. A stack is a collection of services represented by cards

//styles for the container
const styles = {
  container: {
    display: 'flex',
    margin: '40px',
  },
};


export default class StackContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log("this.props.data.services in container: ", this.props.data.services)
    console.log("this in StackContainer:   ", this);
    return (
      <section style={styles.container}>
        <Stack
        stackName={this.props.data.stack.stackName}
        stackDescription={this.props.data.stack.stackDescription}
        trending={this.props.data.stack.trending}
        />
        <StackService
        services={this.props.data.services}/>
      </section>
    );
  }
}

