import React from 'react';

import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className=" rtl navbar navbar-dark bg-dark fixed-top flex-md-nowrap p-0 shadow ">
            <a className='navbar-brand col-sm-3 col-md-2 mr-0 ' href='#'>
                سلام امیر . بهترین مهندس دنیا به تلاشت ادامه بده 
            </a>
            <p className="mt-2" style={{color : 'white'}}>
                تعداد پست‌ها :
                <span className="badge badge-warning badge-pill m-1">20</span>
            </p>
            <p className="mt-2" style={{color : 'white'}}>
                تعداد دوره‌ها :
                <span className="badge badge-warning badge-pill m-1">20</span>
            </p>
            <ul className='navbar-nav px-3'>
                <li className='nav-item text-nowrap '>
                    <Link to='/login'>خروج</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar; 