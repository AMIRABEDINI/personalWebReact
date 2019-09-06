import React, { Component } from 'react'

export default class SideBar extends Component {
    render() {
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
                </div>
            </nav>
        )
    }
}
