import React from 'react';
import StackService from './StackService';
import Stack from './Stack';

import logo from '../logo.svg';

//styles for the container
const styles = {
  container: {
    display: 'flex',
    margin: '40px',
  },
};

//StackContainer component. A stack is a collection of services represented by cards.
export default class StackContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section style={styles.container}>
        <Stack
        stack={this.props.data.stack}
        />
        <StackService
        services={this.props.data.services}/>
      </section>
    );
  }
}
StackContainer.propTypes = {
  props: React.PropTypes.object,
};


