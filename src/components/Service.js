import React from 'react';
import logo from '../logo.svg';


//styles for service cards
const styles = {
    card: {
    border: '1px solid #eee',
    borderRadius: 3,
    fontSize: 15,
    padding: '10px',
    margin: '0px 0px 10px 10px',
    float: 'left',
    maxWidth: 400,
    maxHeight: 200,
    display: 'flex',
  },
  description: {
    height: '3.5em',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
  thumbnail: {
    background: '#eeeeee',
    borderRadius: 3,
    height: '100px',
    width: '100px',
    marginRight: '0px',
    display: 'flex',
  },
  rightColumn: {
    display: 'block',
    float: 'right',
    padding: '10px',
  },
  leftColumn: {
    display: 'block',
    float: 'left',
  },
  price: {
    textAlign: 'center',
  },
  button: {
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 3,
    width: 200,
    height: 50,
    fontSize: 16,
    marginTop: 15,
  },
};


export default class Service extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log("this.props.service in Service:   ", this.props.service);
    return(
      <div style={styles.card} >
        <div style={styles.leftColumn}>
          <img src={logo} style={styles.thumbnail}/>
          <br/>
          <div style={styles.price}>{this.props.service.price}</div>
        </div>
        <div style={styles.rightColumn}>
          <div>{this.props.service.serviceName}</div>
          <div> by <a href="this.props.service.organizationName"> {this.props.service.organizationName}</a></div>
          <br/>
          <div style={styles.description}>{this.props.service.description}
            <button style={styles.button}>Provision Service</button>
          </div>
        </div>
      </div>
    )
  }
};

Service.propTypes = {
  // children: React.PropTypes.string,
  onMouseOver: React.PropTypes.func,
};


