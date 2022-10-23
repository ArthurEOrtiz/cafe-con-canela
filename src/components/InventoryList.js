import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function InventoryList(props){
  return (
    <React.Fragment>
    <hr/>
    {props.inventoryList.map((item, index) =>
      <Item name={item.name}
      origin={item.origin}
      price={item.price}
      quantity={item.quantity}
      roast={item.roast}
      key={index}/>
    )}
    <br />
    </React.Fragment>
  );
}

InventoryList.propTypes = {
  inventoryList: PropTypes.array
};

export default InventoryList;