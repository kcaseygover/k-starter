import React from 'react';
import logo from '../logo.svg';
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
// ///////

const data = {
  serviceName: "Service Name",
  organizationName: "Organization Name",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
  price: "$0-500/mo",
};

const styles = {
    card: {
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
};

export default class Service extends React.Component {

  render() {

    console.log("this.props in Service:   ", this.props);
    return (
      <div className="card" style={styles.card} >
        <div style={styles.leftColumn}>
          <img src={logo} style={styles.thumbnail} className="thumbnail-stack"/>
          <br/>
          <div style={styles.price}>{data.price}</div>
        </div>

        <div style={styles.rightColumn}>
          <div>{data.serviceName}</div>
          <div> by <a href="data.organizationName"> {data.organizationName}</a></div>
          <br/>
          <div className="service-describe" style={styles.description}>{data.description}</div>
        </div>

      </div>
    );
  }
}


