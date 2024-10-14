import React from 'react';
import './Nav.css';
import {Link  as route} from 'react-router-dom';
import { Link } from 'react-scroll';
// import {Link} from 'react-ro'

const Hero = () => {
  return (
    <div className="header" id='Nav'>
    <div className='annnu'>
<h1 className='logo'>Logo</h1>
<div className="nav">
    <Link className='link' to="Nav"spy={true} smooth={true} duration={500}>Home</Link>
    <Link className='link' to="About_section" spy={true} smooth={true} duration={500}>About</Link>
    <Link className='link' to="test" spy={true} smooth={true} duration={500}>Testimonial</Link>
    <route className='link' to="package" spy={true} smooth={true} duration={500}>Packages</route>
    <Link className='link' to="Contact_us" spy={true} smooth={true} duration={500}>Contact us</Link>


</div>
<div className="profile">

</div>
  </div>

  </div>



  );
};

export default Hero;