import React from 'react';
import logo from '../logo.svg';

//styles for
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

//styles for Trending mark. To show if a Stack is Trending.
const trendingStyle = {
  border: '1px solid #eee',
  background: '#eeeeee',
  borderRadius: 15,
  color: 'grey',
  textAlign: 'center',
  paddingTop: 5,
  paddingBottom: 5,
}


export default class Stack extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    //if the stack is trending (trending = true), the stacked will be marked as trending.
    let isTrending = null;
    if (this.props.trending) {
      isTrending = (
        <p style={trendingStyle}>TRENDING</p>
        )
    }

    console.log("this is Stack", this)
    console.log("this.props.stackName in Stack:   ", this.props.stackName  );
    console.log("this.props.trending", this.props.trending)

    return (
      <div style={styles.stackDiv} >
        <div style={styles.stackHeader}>
          <img src={logo} style={styles.thumbnail}  />
          <div>
          <h1>{this.props.stackName}</h1>
            {isTrending}
          </div>
        </div>
        <p>{this.props.stackDescription}</p>
      </div>
    );
  }
}

Stack.propTypes = {
  props: React.PropTypes.object,
  children: React.PropTypes.string,
};

