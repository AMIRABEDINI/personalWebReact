import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import SideBar from './components/sidebar';
import Posts from './components/post';
import Footer from './components/footer';
import About from './components/about';
import Courses from './components/courses';
import Education from './components/education';
import Contact from './components/contact';
import Skill from './components/skill';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container-fluid rtl'>
          <div className='row'>
            <SideBar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Switch>
                <Route path="/courses" component={Courses}/>
                <Route path="/education" component={Education}/>
                <Route path="/skill" component={Skill}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/" component={Posts}/>
              </Switch>
            </main>
          </div>
        </div>
        <Footer />

      </React.Fragment>
    )
  }
}
export default App;
