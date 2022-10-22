import React from 'react';
import PropTypes from "prop-types";

function Item(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>Sacks On Hand: {props.quantity}</p>
      <p>Price per Sack: {props.price}</p>
      <hr />
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  orgin: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  roast: PropTypes.string
};

export default Item;