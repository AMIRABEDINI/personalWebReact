import React from 'react';
import SearchBar from './searchBar';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className=" rtl navbar navbar-dark bg-dark fixed-top flex-md-nowrap p-0 shadow ">
            <a className='navbar-brand col-sm-3 col-md-2 mr-0 ' href='#'>
                وب سایت شخصی
            </a>
            <SearchBar />
            <ul className='navbar-nav px-3'>
                <li className='nav-item text-nowrap '>
                    <Link to='/login'>ورود</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar; 