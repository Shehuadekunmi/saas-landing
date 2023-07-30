import React from 'react'
import '../styles/footer.css'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {AiFillTwitterCircle, AiOutlineYoutube} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <section className=" mt-md-5 text-white text-center py-5 d-md-flex justify-content-around">
<div className="yout">
    <img src={logo} alt="" /> <br />
    <BiLogoFacebookCircle/> <AiFillTwitterCircle/> <BsInstagram/> <AiOutlineYoutube/>
</div>
<div className="link">
    
    <ul>
    <p>SHORT LINKS</p>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Screenshots</a></li>
        <li><a href="#">contact</a></li>
    </ul>
</div>

<div className="help">
<ul>
    <p>HELP LINK</p>
        <li><a href="#">How to download</a></li>
        <li><a href="#">How it work</a></li>
        <li><a href="#">Video tutorial</a></li>
        <li><a href="#">FAQ</a></li>
    </ul>
</div>

<div className="short">
<ul>
    <p>SHORT LINKS</p>
        <li><a href="#">Google Play Store</a></li>
        <li><a href="#">Apple App Store</a></li>
        <li><a href="#">Download Directly</a></li>
    </ul>
</div>
        </section>
    </div>
  )
}

export default Footer