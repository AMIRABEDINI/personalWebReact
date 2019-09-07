import React, { Component } from 'react'
import getNavLinks from '../services/navLinks';
export default class SideBar extends Component {

    render() {
         const navlinks = getNavLinks();
        return (
            <nav className='col-sm-3 col-md-3 col-lg-2 d-block  bg-light sidebar'>
                <div className='sidebar-sticky'>
                    <div className='text-center'>
                    <img src="https://via.placeholder.com/200" alt="" className='img-thumbnail img-fluid'/>
                    <span className='card bg-danger shadow user-fullname'>
                        مهندس امیر عابدینی 
                    </span>
                    <p>برنامه نویس و مهندس نرم افزار</p>
                    </div>
                    <hr className='shadow'/>
                    <ul className='nav flex-column'>
                        {navlinks.map(nav => (
                            <li className='nav-item' key={nav.id}>
                                <a className='nav-link' href={nav.link}>
                                    <span className={nav.icon}></span>
                                    <span className='m-2'>{nav.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        )
    }
}
 