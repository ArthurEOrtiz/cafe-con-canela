import React from "react";
import Item from "./Item";

const testInventoryList = [
  {
    name: "Canela Blend",
    origin: "Central America",
    price: 300.00,
    quantity: 13,
    roast: "Dark"
  },
  {
    name: "Lou Dogs",
    origin: "South America",
    price: 253.56,
    quantity: 30,
    roast: "Light"
  },
  {
    name: "Midnight Oil",
    origin: "Africa",
    price: 576.98,
    quantity: 5,
    roast: "Medium"
  }
];
function InventoryList(){
  return (
    <React.Fragment>
    <hr/>
    {testInventoryList.map((item, index) =>
      <Item name={item.name}
      orgin={item.orgin}
      price={item.price}
      quantity={item.quantity}
      roast={item.roast}
      key={index}/>
    )}
    <br />
    </React.Fragment>
  );
}

export default InventoryList;