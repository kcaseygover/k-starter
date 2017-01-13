import React from 'react';
import logo from '../logo.svg';

//purpose of this component is to show what the service card should look like when hover is activated
//styles for when card is in hover state:
  //(card and description are amended from original state)

//styles for when hover activated
const stylesHover = {
    card: {
      zIndex: 10,
      position: 'absolute',
      border: '1px solid #eee',
      borderRadius: 3,
      fontSize: 15,
      padding: '10px',
      margin: '0px 0px 10px 10px',
      float: 'left',
      width: 450,
      height: 300,
      display: 'flex',
      boxShadow: '0px 0px 20px grey',
      top: -50,
      left: -30,
  },
  description: {
    display: '-webkit-box',
    WebkitLineClamp: 6,
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
export default class StyleHover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("this.props.service in StyleHover:   ", this.props.service)

    return(
      <div style={stylesHover.card} >
        <div style={stylesHover.leftColumn}>
          <img src={logo} style={stylesHover.thumbnail}/>
          <br/>
          <div style={stylesHover.price}>{this.props.service.price}</div>
        </div>

        <div style={stylesHover.rightColumn}>
          <div>{this.props.service.serviceName}</div>
          <div> by <a href="{this.props.service.organizationName}"> {this.props.service.organizationName}</a></div>
          <br/>
          <div style={stylesHover.description}>{this.props.service.description}
          <br/>
            <button style={stylesHover.button}>Provision Service</button>
          </div>
        </div>
      </div>
    )
  }
};






