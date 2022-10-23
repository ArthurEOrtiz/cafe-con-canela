import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTicketForm (props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseFloat(event.target.price.value),
      quantity: parseFloat(event.target.quantity.value),
      roast: event.target.roast.value,
      id: item.id
      });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditItemFormSubmission}
        buttonText="Update Item" />
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
};

export default EditTicketForm;