import React from 'react';

const serviceStyles = {
    border: '1px solid #eee',
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    fontSize: 15,
    padding: '15px',
    margin: 10,
    float: 'left',
    width: '33%',


  };

export default class Service extends React.Component {



  render() {

    console.log("this in Service:   ", this);
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <div className="card" style={serviceStyles}>
              <h1>Service Name</h1>
              <p className="service-describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.</p>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={serviceStyles}>
              <h1>Service Name</h1>
              <p className="service-describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="card" style={serviceStyles}>
              <h1>Service Name</h1>
              <p className="service-describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.</p>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={serviceStyles}>
              <h1>Service Name</h1>
              <p className="service-describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
