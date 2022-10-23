import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>Item Details</h2>
      <hr/>
      <h3>{item.name}</h3>
      <p>Sacks On Hand: {item.quantity}</p>
      <p>Price per Sack: ${item.price}</p>
      <p>Pounds On Hand, <em>130 lb per sack</em>: {130 * item.quantity} lb</p>
      <p>Roast: {item.roast}</p>
      <p>Origin: {item.origin}</p>
      <p>ID : {item.id}</p>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={() => onClickingDelete(item.id)}> Delete Item from List </button>
      
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;