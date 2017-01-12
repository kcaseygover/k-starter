import React from 'react';

const serviceCardStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,

  // transform: 'scale (,)',
};
// const sHover = {
//   backgroundColor: 'red',
// };

// const ServiceCard = ({children}) => {
//         function over(e){
//             e.target.style.backgroundColor='red';
//         }
//         function out(e){
//             e.target.style.backgroundColor='';
//         }

//         return <button style={serviceCardStyles }
//onMouseOver={over} onMouseOut={out}>
//{children} </button>;
//       }



const ServiceCard = ({ children, onMouseOver }) => (
  <button
    style={serviceCardStyles }
    onMouseOver={onMouseOver}
  >
    {children}
  </button>
);

ServiceCard.propTypes = {
  children: React.PropTypes.array,
  onMouseOver: React.PropTypes.func,
};

export default ServiceCard;
