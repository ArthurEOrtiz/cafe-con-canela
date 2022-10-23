import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function InventoryList(props){
  return (
    <React.Fragment>
    <hr/>
    {props.inventoryList.map((item) =>
      <Item 
      whenItemClicked = { props.onItemSelection }
      name={item.name}
      origin={item.origin}
      price={item.price}
      quantity={item.quantity}
      roast={item.roast}
      id={item.id}
      key={item.id}/>
    )}
    <br />
    </React.Fragment>
  );
}

InventoryList.propTypes = {
  inventoryList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default InventoryList;