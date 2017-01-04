import React from 'react';
import Service from './Service';

const styles = {
  stackService: {
    display: 'block',
    float: 'left',
    width: '100%',
    marginTop: '10px',
    // margin: '20px 40px 0 0',
  },
};

export default class StackService extends React.Component {

  render() {

    console.log("this in StackService:   ", this);
    return (
      <div className="stack-services" style={styles.stackService}>
        <Service/>
        <Service/>
        <Service/>
        <Service/>
      </div>
    );
  }
}
