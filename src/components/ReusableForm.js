import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;