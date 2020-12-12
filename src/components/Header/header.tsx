import React, {useState} from 'react';
import logo from '../../assets/images/logo.png'
import './header.scss';
function Header (props: any) {
    return (
        <div className="header-component flex justify-between items-center">
            <div className="img-wrap flex justify-start items-center">
                <img src={logo} alt=""/>
            </div>
            <div className="menu">
                <a href="#home" className={props.homeClass}>Home</a>
                <a href="#events" className={props.eventsClass}>Events</a>
                <a href="#">Promote</a>
                <a href="#">FAQ</a>
                <a href="#">Join Us</a>
            </div>
            <input type="text" placeholder="Search..."/>
        </div>
    )
}

export default Header;
