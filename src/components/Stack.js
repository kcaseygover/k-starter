import React from 'react';
import StackService from './StackService';

import FontAwesome from 'react-fontawesome';
import logo from '../logo.svg';

const data = {
  stackName: "Stack Name",
  stackDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
};

const stackContainerStyles = {
  display: 'flex',
};

const stackStyles = {
margin: 10,
padding: '15px',
maxWidth: 500,
};

const thumbnailStyles = {
  background: '#eeeeee',
  borderRadius: '50%',
  height: '100px',
  width: '100px',
  marginRight: '50px',
};

const stackHeaderStyles = {
  display: 'flex',
  marginBottom: '80px',
};

export default class Stack extends React.Component {

  render() {

    console.log("this in Stack:   ", this);
    return (
      <section className="stack-container row" style={stackContainerStyles}>
        <div className="stack" style={stackStyles} >
          <div className="stack-header" style={stackHeaderStyles}>
            <img src={logo} style={thumbnailStyles} className="thumbnail-stack" />
            <h1>{data.stackName}</h1>
            <FontAwesome
              className='super-crazy-colors'
              name='rocket'
              size='2x'
              spin
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <p className="stack-describe">{data.stackDescription}</p>
        </div>
        < StackService />
      </section>
    );
  }
}
