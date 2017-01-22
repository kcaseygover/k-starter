import React from 'react';
import Service from './Service';
import HoverService from './HoverService';

//styles for wrapping div around the collection of cards
const styles = {
  stackService: {
    display: 'block',
    float: 'left',
    width: '100%',
    marginTop: '10px',
  },
};

//StackService component show the collections of service cards.
export default class StackService extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Below in return, mapping through data to render each service card.
    return(
      <div style={styles.stackService}>
        {this.props.services.map((card) =>{
          return (
            <HoverService
              key={card.id}
              service={card}
            />
          )
        })}
      </div>
    )
  }
}
StackService.propTypes = {
  props: React.PropTypes.object,
};

