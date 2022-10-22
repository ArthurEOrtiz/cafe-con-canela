import React from 'react';
import Header from "./Header";
import TicketControl from './InventoryControl';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;
