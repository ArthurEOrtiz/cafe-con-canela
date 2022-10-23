import React from 'react';
import PropTypes from "prop-types";

function Item(props){
  return (
    <React.Fragment>
      <div onClick = {()=> props.whenItemClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Roast: {props.roast}</p>
        <p>Origin: {props.origin}</p>
        <p>Sacks On Hand: {props.quantity}</p>
        <p>Price per Sack: {props.price}</p>
        <p>Pounds On Hand (130lb per sac): {130 * props.quantity}lb</p>
      </div>
      <div>
        <button type="button" onClick = {()=> props.whenPoundSold(props.id)}>Consume 1 lb</button>
        <hr />
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  orgin: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  roast: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func,
  whenPoundSold: PropTypes.func
};

export default Item;