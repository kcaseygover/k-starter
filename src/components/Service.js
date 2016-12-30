import React from 'react';

export default class Service extends React.Component {

  render() {

    console.log("this in Service:   ", this);
    return (
      <div>
        <h1>Service Name</h1>
        <p className="service-describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.</p>
      </div>
    );
  }
}
