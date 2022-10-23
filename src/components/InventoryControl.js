import React from 'react';
import InventoryList from './InventoryList';
import NewInventoryForm from './NewInventoryForm';
import ItemDetail from './ItemDetail';

class InventoryControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      inventoryListArray: [],
      selectedItem: null
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null)
    {
      this.setState({
        formVisible: false,
        selectedItem: null
      });
    }
    else 
    {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible,
      }));
    }
  }

  handleAddingNewInventory = (newItem) => {
    const newInventoryListArray = this.state.inventoryListArray.concat(newItem);
    this.setState({
      inventoryListArray: newInventoryListArray, 
      formVisible: false
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.inventoryListArray.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  render() {
    let visibleState = null;
    let buttonText = null;

    if (this.state.selectedItem != null){
      visibleState = <ItemDetail item={this.state.selectedItem} />
      buttonText = "Back To Invntory";
    }
    else if (this.state.formVisible){
      visibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventory} />;
      buttonText = "Back To Inventory";
    }
    else
    {
      visibleState = <InventoryList inventoryList={this.state.inventoryListArray} onItemSelection={this.handleChangingSelectedItem} />;
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