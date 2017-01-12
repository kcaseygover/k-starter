import React from 'react';
import Trend from './Trend';
import logo from '../logo.svg';

const data = {
  stackName: "Stack Name",
  stackDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
  trending: "true",
};

const styles = {
  container: {
    display: 'flex',
    margin: '40px',
  },
  stackDiv: {
    margin: 10,
    padding: '15px',
    maxWidth: 500,
  },
  thumbnail: {
    background: '#eeeeee',
    borderRadius: '50%',
    height: '100px',
    width: '100px',
    marginRight: '30px',
  },
  stackHeader: {
    display: 'flex',
    marginBottom: '50px',
  },
};
const trendingStyle = {
  border: '1px solid #eee',
  background: '#eeeeee',
  borderRadius: 15,
  color: 'grey',
  textAlign: 'center',
  paddingTop: 5,
  paddingBottom: 5,


}

let isTrending = "TRENDING";
if (data.trending == false){
  isTrending = "";
}


const Stack = (props) => {
    console.log("props in Stack:   ", props);
    console.log("this in Stack:   ", this);
    // console.log("this props name", this.props.name);
console.log("data.trending", data.trending)


    return (
      <div style={styles.stackDiv} >
        <div style={styles.stackHeader}>
          <img src={logo} style={styles.thumbnail}  />
          <div>
          <h1>{data.stackName}</h1>
          <p style={trendingStyle}>{isTrending}</p>
          </div>
        </div>
        <p>{data.stackDescription}</p>
      </div>
    );
}

Stack.propTypes = {
  props: React.PropTypes.object,
};
export default Stack;
