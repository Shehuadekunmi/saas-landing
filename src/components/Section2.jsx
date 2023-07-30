import React from 'react'
import Ellipse48 from '../assets/Ellipse48.png'
import Ellipse49 from '../assets/Ellipse49.png'
import Ellipse50 from '../assets/Ellipse50.png'
import Ellipse51 from '../assets/Ellipse51.png'
import Ellipse52 from '../assets/Ellipse52.png'
import lap from '../assets/lapt.png'
import plus from '../assets/plus.png'
import num from '../assets/num.png'
import check from '../assets/check-circle.png'
import '../styles/section2.css'
import {BsCheck2Circle} from 'react-icons/bs'

const Section2 = () => {
    return (
        <div>
            <div >
                <div className="img  d-flex flex-wrap">
                    
                    <div className='la'>
                  <div className="lapt"> <img src={lap} alt="" className='img-fluid text-center ' /> </div> 
                       <div className='d-flex num text-center  mt-2'> <img src={num} alt="" />
                        <p>Legend</p>
                        <p>+25%</p> </div>

                        <div className='tran'>
                            <h5 className='mt-3 text-center'>New transaction</h5>
                            <div className="d-flex flex-wrap  justify-content-aroun gap-2 ann mt-4">
                                <div>
                                    <img src={Ellipse48} alt="" className='img-fluid' />
                                    <p>Ann</p>
                                </div>
                                <div>
                                    <img src={Ellipse49} alt="" className='img-fluid' />
                                    <p>Monica</p>
                                </div>
                                <div>
                                    <img src={Ellipse50} alt="" className='img-fluid' />
                                    <p>John</p>
                                </div>
                                <div>
                                    <img src={Ellipse51} alt="" className='img-fluid' />
                                    <p>Mike</p>
                                </div>
                                <div>
                                    <img src={Ellipse52} alt="" className='img-fluid' />
                                    <p>Mia</p>
                                </div>
                                <div>
                                    <img src={plus} alt="" className='img-fluid' />
                                    <p>Add New</p>
                                </div>

                                <div className='text-center input ms-3 mt-4'>
                                    <input type="text" placeholder='0  $' /> <button>Send the transfer</button>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className="text text-center">
                        <h6 className='lore '>Lorem ih6sum dolor sit ame</h6>
                        <h4>Simple Solutions for <br /> Complex Connections</h4>
                        <p className='ipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida feugiat neque, ipsum faucibus. 
                        Pharetra vel suspendisse mi odio a velit feugiat sapien.</p>

                        <div className='high text-center mx-5 fs-5 '>
                        <div className='flex '><p><BsCheck2Circle/> Certified Institute</p></div>
                        <div className='flex alt'>    <p className='ana'> <BsCheck2Circle/> High Analysis</p> </div>
                        </div>

                        <button>Learn More</button>
                    </div>
                </div>

            </div>
      </div>
            )
}

            export default Section2