import React from 'react'
import '../styles/section5.css'
import rect26 from '../assets/Rectangle26.png'
import rect28 from '../assets/Rectangle28.png'
import rect29 from '../assets/Rectangle29.png'
import rect30 from '../assets/Rectangle30.png'
import vect from '../assets/vect.png'
import { AiFillStar } from 'react-icons/ai'
import {IoIosArrowForward} from 'react-icons/io'

const Section5 = () => {
    return (
        <div>
            <section className='sect5'>
                <div className='review text-center mt-2'>
                    <h1>User’s Review</h1>
                    <p>Collaborate over projects with your team and clients optimised <br /> for mobile and tablet don't let slow</p>
                </div>

                <div className="flee d-md-flex justify-content-around text-center">
                    <div className="text">
                        <h3>What People Say About Us</h3>
                        <div>
                            <div className="ceo pt-3">
                                <h4>Davit millar</h4>
                                <p>CEO, PParkivew int, Ltd</p>
                            </div>

                            <div className='star w-50'>
                                <AiFillStar  className='aif' /> <AiFillStar className='aif' /> <AiFillStar className='aif' /> <AiFillStar className='aif'/> <AiFillStar className='fad' />
                            </div>
                            <div className="lorer">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisl, tincidunt commodo sit. Et, purus lectus odio cursus placerat leo, non etiam. Neque at leo risus orci, </p>
                            </div>
                        </div>
                        <div className="arrow">
                            <img src={rect30} alt=""  className='clo'/> <IoIosArrowForward className='io'/>
                            <img src={rect29 }  alt="" /> <IoIosArrowForward className='ioi'/>
                        </div>
                    </div>
                    <div className='style mt-3'> <img src={rect26} alt=""  /> </div>
                </div>
                
                <img src={rect28} alt="" className='none'/>
                <img src={vect} alt="" />
            </section>
        </div>
    )
}

export default Section5