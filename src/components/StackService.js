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

export default class StackService extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("this.props.services in StackService:   ", this.props.services.length)
    return(
      <div style={styles.stackService}>
        {this.props.services.map((e) =>{
          return (
            <Service
              key={e.id}
              service={e}
            />
          )
        })}

        <HoverService/>
        <HoverService/>
      </div>
    )
}
}

