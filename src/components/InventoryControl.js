import React from 'react';
import InventoryList from './InventoryList';
import NewInventoryForm from './NewInventoryForm';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';

class InventoryControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      inventoryListArray: [],
      selectedItem: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null)
    {
      this.setState({
        formVisible: false,
        selectedItem: null,
        editing: false
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

  handleDeletingItem = (id) => {
    const newInventoryListArray = this.state.inventoryListArray.filter(item => item.id !== id);
    this.setState({
      inventoryListArray: newInventoryListArray,
      selectedItem: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingItem = (itemToEdit) => {
    const editedInventoryListArray = this.state.inventoryListArray
    .filter(item => item.id !== this.state.selectedItem.id)
    .concat(itemToEdit);
    this.setState({
      inventoryListArray: editedInventoryListArray,
      editing: false,
      selectedItem: null
    });
  }

  handleSellingPound = (id) => {
    const selectedItem = this.state.inventoryListArray.filter(item => item.id === id)[0]; 
    if (selectedItem.quantity > 0.000)
    {
      const newQuantity = selectedItem.quantity - (1/130)
      const modifiedItem = {...selectedItem, quantity: newQuantity}
      const newInventoryListArray = this.state.inventoryListArray.filter(item => item.id !== id).concat(modifiedItem);
      this.setState({
        inventoryListArray: newInventoryListArray
      });
    } else {
      console.log("No More Coffee");
    }
  }

  render() {
    let visibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      visibleState = <EditItemForm 
      item = {this.state.selectedItem} 
      onEditItem = {this.handleEditingItem} />
      buttonText = "Back To Inventory";
    }
    else if (this.state.selectedItem != null){
      visibleState = <ItemDetail 
      item={this.state.selectedItem} 
      onClickingDelete = {this.handleDeletingItem}
      onClickingEdit = {this.handleEditClick}/>
      buttonText = "Back To Inventory";
    }
    else if (this.state.formVisible){
      visibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventory} />;
      buttonText = "Back To Inventory";
    }
    else
    {
      visibleState = <InventoryList 
      inventoryList={this.state.inventoryListArray} 
      onItemSelection={this.handleChangingSelectedItem}
      onSellingPound={this.handleSellingPound} />;
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