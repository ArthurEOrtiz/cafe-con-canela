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
    this.setState({formVisible: true});
  }

  render() {
    let visibleState = null;
    let inventoryButton = null;

    if (this.state.formVisible){
      visibleState = <NewInventoryForm />
    }
    else
    {
      visibleState = <InventoryList />
      inventoryButton= <button onClick={this.handleClick}>Add Inventory</button>
    }


    return (
      <React.Fragment>
        {visibleState}
        {inventoryButton}
      </React.Fragment>
    );
  }
}

export default InventoryControl;