import React from 'react'
import './about.css'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
function Detail() {
  return (
    <div id='About_section'>
      <div className="about" >
        <div className="image">
        <AccountBalanceIcon style={{ fontSize: '400px', color: 'wheat', marginTop:'4rem', marginLeft:'3rem' }} />
        </div>
        <div className="text">
            <h1 className='about_title'>Buna Bank</h1>
            <p className='about_p'>Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Omnis id doloremque perspiciatis provident fugiat cupiditate amet maiores quae,
                 harum nihil optio adipisci, neque ex sapiente exercitationem quo, quia veniam 
                 Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Omnis id doloremque perspiciatis provident fugiat cupiditate amet maiores quae,
                 harum nihil optio adipisci, neque ex sapiente exercitationem quo, quia veniam
                 Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Omnis id doloremque perspiciatis provident fugiat cupiditate amet maiores quae,
                 harum nihil optio adipisci, neque ex sapiente exercitationem quo, quia veniam </p>
                 <button className='btn2'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Detail
