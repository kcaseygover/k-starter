import React from 'react';
import Service from './Service';
import HoverService from './HoverService';

//StackService component show the collections of service cards.


//styles for wrapping div around the collection of cards
const styles = {
  stackService: {
    display: 'block',
    float: 'left',
    width: '100%',
    marginTop: '10px',
  },
};

export default class StackService extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Below in return, mapping through data to render individual service cards
    //Hover state currently not activated in mapped cards
    //rendering 2 cards in HoverState
    console.log("this.props.services in StackService:   ", this.props.services)
    return(
      <div style={styles.stackService}>
        {this.props.services.map((card) =>{
          return (
            <Service
              key={card.id}
              service={card}
            />
          )
        })}

        <HoverService/>
        <HoverService/>
      </div>
    )
}
}

