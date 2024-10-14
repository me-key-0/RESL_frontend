import React from 'react'
import './message.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

function Message() {
  return (
    <div id='Contact_us'>
      <div className="message">
<div className="m1">
    <h1 className='get'>Get in touch</h1><br/><br/>
    <form>
        <label>Name</label><br/><br/>
        <input type='text'/><br/>
        <label>Email</label><br/><br/>
        <input type='email'/><br/>
        <label>Message</label><br/><br/>
        <input type='textarea'/><br/><br/>
        <button className='btn3'>Send me</button>
    </form>

</div>
<div className="m2">
    <h1 className='con'>Contact us</h1>
    <p  className='add'><LocalPhoneIcon/>Phone:+251973424545</p>
    <p className="add"> <MailOutlineIcon/>Email:ananyateshome2@gmail</p>
    <p className='add'><AddLocationAltIcon/> Address:Addis Ababa ,Kotebe</p>
</div>
<div className="bot">
<div className='chat'></div>
</div>

      </div>
      
    </div>
  )
}

export default Message
