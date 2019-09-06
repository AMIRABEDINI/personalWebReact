import React, { Component } from 'react';

const Navbar = () => {
    return ( 
        <nav className="rtl navbar navbar-dark bg-dark fixed-top flex-md-nowrap p-0 shadow ">
            <a className='navbar-brand col-sm-3 col-md-2 mr-0 ' href='#'>
                وب سایت شخصی
            </a>
            <input className='form-contorl form-contorl-dark w-100' type='text' placeholder='جستجو'/>
            
        </nav>
     );
}
 
export default Navbar;