import React from 'react'
import '../styles/section6.css'
import { BsCheck2Circle, BsFire } from 'react-icons/bs'
import poly from '../assets/poly.png'
import love from '../assets/love.png'
import fire from '../assets/fire.png'

const Section6 = () => {
    return (
        <div>
            <section className='extral text-center'>
                <h6>Without Extra Charge Choose <br />
                    Your Best Plan</h6>
                <div className='butt mt-3'>
                    <button className='year '>Monthly</button> <button className='month  '>Yearly</button>
                </div>
                <div className='d-md-flex justify-content-center  my-4'>
                    <div className="one1">
                    <div className="poly">   <img src={poly} alt="" /> <img src={fire} alt="" className='fire'/> </div> 
                        <h5>Standard</h5>
                        <h1>$29</h1>
                        <p>monthly pack</p>
                        <div className="one-one">
                            <p><BsCheck2Circle className='check' /> 255 GB SSD STORE</p>
                            <p><BsCheck2Circle className='check' /> FULL UI KIT DOWNLOAD</p>
                            <p><BsCheck2Circle className='check' /> PUBLIC API</p>
                            <p><BsCheck2Circle className='check' /> FULL UI PACK DOWNLOAD</p>
                            <p><BsCheck2Circle className='check' /> 24/7 SUPPORT</p>
                        </div>
                        <button>Install Pack</button>
                    </div>
                    <div className="two2 mt-4">
                    <div className="poly"> <img src={poly} alt="" /> <img src={love} alt="" className='love' /> </div>
                        <h5>Standard</h5>
                        <h1>$39</h1>
                        <p>monthly pack</p>
                        <div className="two-two">
                            <p><BsCheck2Circle className='check' /> 256 GB SSD STORE</p>
                            <p><BsCheck2Circle className='check' /> FULL UI KIT DOWNLOAD</p>
                            <p><BsCheck2Circle className='check' /> PUBLIC API</p>
                            <p><BsCheck2Circle className='check' /> FULL UI PACK DOWNLOAD</p>
                            <p><BsCheck2Circle className='check' /> 24/7 SUPPORT</p>
                        </div>
                        <button>Install Pack</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section6