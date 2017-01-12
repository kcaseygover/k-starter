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
const services = {
      serviceName: "Service Name",
      organizationName: "Organization Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
      price: "$0-500/mo",
    }

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
  button: {
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 3,
    width: 200,
    height: 50,
    fontSize: 16,
    marginTop: 15,
    // visibility: 'hidden',
  },
};



const Service = (props, onMouseOver, onMouseOut) => {


  console.log("props in Service:   ", props);
return(
  <div style={styles.card} >
    <div style={styles.leftColumn}>
      <img src={logo} style={styles.thumbnail}/>
      <br/>
      <div style={styles.price}>{services.price}</div>
    </div>

    <div style={styles.rightColumn}>
      <div>{services.serviceName}</div>
      <div> by <a href="services.organizationName"> {services.organizationName}</a></div>

      <br/>
      <div style={styles.description}>{services.description}
        <button style={styles.button}>Provision Service</button>
      </div>
    </div>

  </div>
  )
};

Service.propTypes = {
  // children: React.PropTypes.string,
  onMouseOver: React.PropTypes.func,
};
export default Service;

