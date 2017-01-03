import React from 'react';
import Service from './Service';

const stackServiceStyles = {
  display: 'flex',
  margin: '20px 40px 0 0',

};

export default class StackService extends React.Component {



  render() {

    console.log("this in StackService:   ", this);
    return (

      <div className="stack-services" style={stackServiceStyles}>
        <Service/>
        <Service/>
      </div>
    );
  }
}
