import React from 'react';
import InventoryList from './InventoryList';
import NewInventoryForm from './NewInventoryForm';

class InventoryControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      inventoryListArray: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  handleAddingNewInventory = (newItem) => {
    const newInventoryListArray = this.state.inventoryListArray.concat(newItem);
    this.setState({
      inventoryListArray: newInventoryListArray, 
      formVisible: false
    });
  }

  render() {
    let visibleState = null;
    let buttonText = null;

    if (this.state.formVisible){
      visibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventory} />
      buttonText = "Back To Inventory";
    }
    else
    {
      visibleState = <InventoryList inventoryList={this.state.inventoryListArray} />;
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