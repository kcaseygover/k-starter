import React from 'react';

const serviceCardStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,

  // transform: 'scale (2,3)',
};
const sHover = {
  color: 'red',
};

const ServiceCard = ({ children, onMouseOver }) => (
  <button
    style={serviceCardStyles}
    onMouseOver={onMouseOver}
  >
    {children}
  </button>
);

ServiceCard.propTypes = {
  children: React.PropTypes.string.isRequired,
  onMouseOver: React.PropTypes.func,
};

export default ServiceCard;
