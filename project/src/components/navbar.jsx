import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="rtl navbar navbar-dark bg-dark fixed-top flex-md-nowrap p-0 shadow ">
            <a className='navbar-brand col-sm-3 col-md-2 mr-0 ' href='#'>
                وب سایت شخصی
            </a>
            <input className='form-contorl form-contorl-dark w-100' type='text' placeholder='جستجو'/>
            <ul className='navbar-nav px-3'> 
                <li className='nav-item text-nowrap'>
                    <a>خروج</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;