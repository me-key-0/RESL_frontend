import React from 'react'
import './Hero.css'
import buna from '../images/buna2.png'

function Hero() {
  return (
    <div className='hero-main' id='hero'>
      <div>
<h1 className='gust'> Fast easy Loan system<br/> provider Buna Bank</h1>
<p className='fp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repudiandae,<br/> 
 harum libero quasi quo,  illo pariatur deserunt adipisci nam voluptate veniam. <br/>
  Nobis nam qui quisquam nisi, ipsa architecto illum tempora.</p>
  <button className='btn-loan'>Loan</button>
      </div>
      <div>
<img className='img1' src={buna} alt='buna'/>
      </div>
    </div>
  )
}

export default Hero
