import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
       <>
        <div className='footer-container'>
            <div className='about-us'>
                <h2 className='news'>About Us</h2> <br /> <br />
                <p>Lorem ipsum dolor sit am <br /> consectetur adipisicing elit do <br /> eiusmod tempor incididunt ut labore <br /> dolore magna.</p>
            </div>
            <div >
                <h4 className='news'>Quick Links</h4> <br />
                <div className='quick-link'>
                <div className='left'>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Our Cases</li>
                        <li>Other Links</li>
                    </ul>
                </div>
                <div className='right'>
                    <ul>
                        <li>Consuling</li>
                        <li>Finance</li>
                        <li>Testimonial</li>
                        <li>FAQ</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className='open-hours'>
                <h4 className='news' >Open Hours</h4> <br />
                <p>Lorem ipsum dolor sit ame <br /> consectetur adipisicing elit do <br /> eiusmod tempor incididunt.</p>
                <p>Monday - Fridayp       8.00-20.00</p>
                <p>Saturday               9.00-18.30</p>
                <p> Monday - Thusday      9.00-15.00</p>
            </div>
            <div className='news-letter'> 
            <h4 className='news'>NewsLetter</h4> <br />
             <p>subscribe to our newsletter to get <br /> allour news in your inbox.. Lorem <br /> ipsum dolor sit amet, consectetur <br /> adipisicing elit,</p>
            </div>
        </div>
       
       </>
    );
};

export default Footer;