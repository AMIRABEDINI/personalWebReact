
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import SideBar from './components/sidebar';
import Posts from './components/post';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container-fluid rtl'>
          <div className='row'>
          <SideBar/>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Posts/>
          </main>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default App;
