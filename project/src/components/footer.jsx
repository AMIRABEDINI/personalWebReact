import React, { Component } from 'react';

const Footer = () => {
    return (

        <footer className="rtl float-left fixed-bottom navbar navbar-dark bg-dark col-md-9 ml-sm-auto col-lg-10 px-4 shadow ">
            <div className="copyright">
                <p className="fa fa-copyright m-1">
                    تمامی حقوق این سایت محفوظ است 
                </p>
            </div>
            <div className="socialmedia">
                <a href="http://instagram.com" className="fa fa-instagram ml-1"></a>
                <a href="http://facebook.com" className="fa fa-facebook ml-1"></a>
            </div>
        </footer>
    )
}
export default Footer;