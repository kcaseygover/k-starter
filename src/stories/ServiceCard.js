import React from 'react';

const serviceCardStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const ServiceCard = ({ children, onClick }) => (
  <button
    style={serviceCardStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

ServiceCard.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default ServiceCard;
