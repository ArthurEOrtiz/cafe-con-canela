import React from "react";


function NewInventoryForm(){

  function handleNewInventoryFormSubmission(event){
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.origin.value);
    console.log(event.target.price.value);
    console.log(event.target.quantity.value);
    console.log(event.target.roast.value);
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

export default NewInventoryForm;