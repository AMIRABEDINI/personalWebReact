
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import SideBar from './components/sidebar';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container-fluid rtl'>
          <div className='row'>
          <SideBar/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default App;
