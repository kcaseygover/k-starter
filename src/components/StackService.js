import React from 'react';
import Service from './Service';
import HoverService from './HoverService';

const styles = {
  stackService: {
    display: 'block',
    float: 'left',
    width: '100%',
    marginTop: '10px',
    // margin: '20px 40px 0 0',
  },
};

const StackService = (props) => {
    console.log("props.services in StackService:   ", props.services)
  return(
    <div style={styles.stackService}>
      <Service/>
      <HoverService

        />
    </div>
  )
}
export default StackService;
