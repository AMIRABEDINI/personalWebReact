import React from 'react';
<<<<<<< HEAD
import SearchBar from './searchBar';
=======

>>>>>>> 35c48185c475832410dc5e7ab595df95a682cb23
const Navbar = () => {
    return (
        <nav className=" rtl navbar navbar-dark bg-dark fixed-top flex-md-nowrap p-0 shadow ">
            <a className='navbar-brand col-sm-3 col-md-2 mr-0 ' href='#'>
                وب سایت شخصی
            </a>
            <SearchBar />
            <ul className='navbar-nav px-3'>
                <li className='nav-item text-nowrap text-light'>
                    <a>خروج</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;