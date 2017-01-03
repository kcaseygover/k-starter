import React from 'react';
// const Service = ({ children}) => (
//   <div
//   style={serviceStyles}
//   >
//   {children}
//   <p className="service-describe" style={serviceDescriptStyles}>
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.
//   </p>
//   </div>
// );

// Service.propTypes = {
//   children: React.PropTypes.string.isRequired,
// };

// export default Service;
const data = {
  serviceName: "Service Name",
  organizationName: "Organization Name",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
  price: "$0-500/mo",
};

const serviceStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  fontSize: 15,
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
        <h2>{data.serviceName}</h2>
        <h5>by <a href="data.organizationName">{data.organizationName}</a></h5>
        <p className="service-describe" style={serviceDescriptStyles}>{data.description}</p>
      </div>
    );
  }
}


