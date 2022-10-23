import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewInventoryForm(props){

  function handleNewInventoryFormSubmission(event){
    event.preventDefault();
    props.onNewInventoryCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseFloat(event.target.price.value),
      quantity: parseInt(event.target.quantity.value),
      roast: event.target.roast.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewInventoryFormSubmission}>
        <input 
          type="text"
          name="name"
          placeholder="Name of Bean"
        />
        <br/>
        <input 
          type="text"
          name="origin"
          placeholder="Origin of Coffee Bean"
        />
        <br/>
        <input 
          type="number"
          min="0.00"
          step="0.01"
          name="price"
          placeholder="Prive per Sac"
        />
        <br/>
        <input
          type="number"
          name="quantity"
          min="1"
          placeholder="Initial Quantity"
        />
        <br/>
        <input
          type="text"
          name="roast"
          placeholder="Roast Type"
          list="roastType"
        />
        <datalist id="roastType">
            <option value = "Dark" />
            <option value = "Medium" />
            <option value = "Light" />
        </datalist>
        <br/>
        <br/>
        <button type="submit">Add Inventory</button>
      </form>
    </React.Fragment>
  );
}

NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default NewInventoryForm;