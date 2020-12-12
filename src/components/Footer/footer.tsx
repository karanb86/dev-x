import React from 'react';
import './footer.scss';
import logo from '../../assets/images/logo.png';

function Footer (props: any) {
    return (
        <div className="footer-component flex flex-wrap justify-around items-center">
            <img src={logo} alt="logo" className="spacer"/>
            <div className="list flex flex-column spacer">
                <a href="#" className="head text-green">Home</a>
                <a href="#" className="text-white">Events</a>
                <a href="#" className="text-white">Promote</a>
                <a href="#" className="text-white">Join Us</a>
            </div>
            <div className="list flex flex-column spacer">
                <a href="#" className="head text-green">Contact Us</a>
                <a href="#" className="text-white">Facebook</a>
                <a href="#" className="text-white">Twitter</a>
                <a href="#" className="text-white">Youtube</a>
            </div>
            <div className="list flex flex-column spacer">
                <a href="#" className="head text-green">FAQ</a>
                <a href="#" className="text-white">What is HOC?</a>
                <a href="#" className="text-white">Why Computer Science?</a>
                <a href="#" className="text-white">What is the Hour of Code?</a>
            </div>
        </div>
    )
}

export default Footer;
