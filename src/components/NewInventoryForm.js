import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewInventoryForm(props){

  function handleNewItemFormSubmission(event){
    event.preventDefault();
    props.onNewInventoryCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseFloat(event.target.price.value),
      quantity: parseFloat(event.target.quantity.value),
      roast: event.target.roast.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Add To Inventory" />
    </React.Fragment>
  );
}

NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default NewInventoryForm;