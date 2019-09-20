import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import getAdminNavLinks from '../../services/adminNavLink'
export default class SideBar extends Component {
    render() {
        const navlinks = getAdminNavLinks();
        return (
            <nav className='col-sm-3 col-md-3 col-lg-2 d-block  bg-light sidebar'>
                <div className='sidebar-sticky'>    
                    <ul className='nav flex-column'>
                        {navlinks.map(nav => (
                            <li className='nav-item' key={nav.id}>
                                <Link className='nav-link' to={nav.link}>
                                    <span className={nav.icon}></span>
                                    <span className='m-2'>{nav.text}</span>
                                </Link>
                                <hr/>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        )
    }
}
