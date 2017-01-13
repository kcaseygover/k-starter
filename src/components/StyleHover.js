import React from 'react';
import logo from '../logo.svg';

//styles for when card is in hover state:
  //(card and description are amended)

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
    // bottom: 10,
    // right:10,
  },
  description: {
    // height: '7em',
    // overflow: 'hidden',
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
const data = {
  serviceName: "Service Name",
  organizationName: "Organization Name",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. ",
  price: "$0-500/mo",
};

const StyleHover = (props) => {
  console.log("props in StyleHover:   ", props)

return(
  <div style={stylesHover.card} >
    <div style={stylesHover.leftColumn}>
      <img src={logo} style={stylesHover.thumbnail}/>
      <br/>
      <div style={stylesHover.price}>{data.price}</div>
    </div>

    <div style={stylesHover.rightColumn}>
      <div>{data.serviceName}</div>
      <div> by <a href="data.organizationName"> {data.organizationName}</a></div>
      <br/>
      <div style={stylesHover.description}>{data.description}
      <br/>
        <button style={stylesHover.button}>Provision Service</button>
      </div>
    </div>

  </div>
  )
};

export default StyleHover;





