  
import React, { Component } from 'react';
import { Route, Switch , Redirect} from 'react-router-dom';
import Navbar from './navbar';
import SideBar from './sidebar';


  
class  Dashbord extends Component {
  render() {
    return (
      <div className='container-fluid rtl'>
      <Navbar />
          <div className='row'>
            <SideBar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              {/*<Switch>
                <Route path="/courses" component={Courses} />
                <Route path="/education" component={Education}/>
                <Route path="/skill" component={Skill}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/" exact component={Posts}/>
                <Redirect to="/not-found"/>
              </Switch>*/}
            </main>
          </div>
        </div>
    )
  }
}
export default Dashbord;
