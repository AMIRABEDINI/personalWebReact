import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import getNavLinks from '../services/navLinks';
import UserInfo from './common/userinfo';
export default class SideBar extends Component {
  
    render() {
        const navlinks = getNavLinks();
        return (
            <nav className='col-sm-3 col-md-3 col-lg-2 d-block  bg-light sidebar'>
                <div className='sidebar-sticky'>
                    <UserInfo
                        imgUrl='http://s4.picofile.com/file/8371707076/photo_2019_08_23_00_08_57.jpg'
                        fullName='امیر عابدینی'
                        biotext=' مهندس نرم افزار و برنامه نویس'
                    />
                    <hr className='shadow' />
                    <ul className='nav flex-column'>
                        {navlinks.map(nav => (
                            <li className='nav-item' key={nav.id}>
                                <Link className='nav-link' to={nav.link}>
                                    <span className={nav.icon}></span>
                                    <span className='m-2'>{nav.text}</span>
                                    {nav.count ? ( 
                                        <span className='badge-info badge-pill'>
                                            {nav.count}
                                        </span>
                                    ) : null}
                                </Link>

                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        )
    }
}
