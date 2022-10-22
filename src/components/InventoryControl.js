import React from 'react';
import InventoryList from './InventoryList';
import NewInventoryForm from './NewInventoryForm';

class InventoryControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  render() {
    let visibleState = null;
    let buttonText = null;

    if (this.state.formVisible){
      visibleState = <NewInventoryForm />;
      buttonText = "Back To Inventory";
    }
    else
    {
      visibleState = <InventoryList />;
      buttonText = "Add Inventory";
    }


    return (
      <React.Fragment>
        {visibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default InventoryControl;