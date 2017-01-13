import React from 'react';
import logo from '../logo.svg';
import Service from './Service';
import StyleHover from './StyleHover';

const data = {
  serviceName: "Service Name",
  organizationName: "Organization Name",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
  price: "$0-500/mo",
};

const styles = {
    card: {
    position: 'relative',
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
    visibility: 'hidden',
  },
};
const stylesHover = {
    card: {
    border: '1px solid #eee',
    borderRadius: 3,
    fontSize: 15,
    padding: '10px',
    margin: '0px 0px 10px 10px',
    float: 'left',
    maxWidth: 400,
    maxHeight: 300,
    display: 'flex',
    boxShadow: '0px 0px 20px grey'
  },
  description: {
    height: '7em',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 6,
    WebkitBoxOrient: 'vertical',
  },
}


export default class HoverService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  };

  onMouseOver() {
    this.setState({hover: true})
  };

  onMouseOut() {
    this.setState({hover: false})
  };

  render() {
    console.log("this is HoverService", this)
    let popup = null;
    if (this.state.hover == true) {
      popup = (
        <StyleHover/>
      )
    }

    console.log("in HoverService:   ");
    return(
      <div style={styles.card}
      onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}
      >
        {popup}
        <div style={styles.leftColumn}>
          <img src={logo} style={styles.thumbnail}/>
          <br/>
          <div style={styles.price}>{data.price}</div>
        </div>

        <div style={styles.rightColumn}>
          <div>{data.serviceName}</div>
          <div> by <a href="data.organizationName"> {data.organizationName}</a></div>

          <br/>
          <div style={styles.description}>{data.description}
            <button style={styles.button}>Provision Service</button>
          </div>

        </div>

      </div>
    )
  }

};







