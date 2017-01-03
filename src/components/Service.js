import React from 'react';

const serviceStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  // fontSize: 15,
  padding: '15px',
  margin: '0px 0px 10px 10px',
  float: 'left',
  maxWidth: 400,
  maxHeight: 200,

};

const serviceDescriptStyles = {
  height: '3.5em',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
};

export default class Service extends React.Component {



  render() {

    console.log("this in Service:   ", this);
    return (
      <div className="card" style={serviceStyles} >
        <h2>Service Name</h2>
        <p className="service-describe" style={serviceDescriptStyles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.</p>
      </div>
    );
  }
}
