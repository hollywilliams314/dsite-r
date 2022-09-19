// import React from 'react'
import {  FaBandcamp, FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='socialLinks'> 
        <FaFacebook className='socialIcon'/>
        <FaInstagram className='socialIcon'/>
        <FaBandcamp className='socialIcon'/>
      </div>
      <p>Copyright &copy; 2022</p>
      <p><a href='/bio'>Bio</a></p>
      <p><a href='/events'>Weddings and Events </a></p>
      <p><a href='/lessons'>Lessons</a></p>
      <p><a href='/regulation'>Harp Regulation</a></p>
      <p><a href='/contactMe'>Contact Me</a></p>

    </footer>
  )
}

export default Footer
