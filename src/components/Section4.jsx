import React from 'react'
import '../styles/section4.css'
import hand from '../assets/hand.png'
import pen from '../assets/penci.png'
import buld from '../assets/buld.png'
import set from '../assets/setting.png'
import user from '../assets/user.png'

const Section4 = () => {
    return (
        <div className='hand'>
            <div className='user'>
                <section className='d-flex flex-wrap justify-content-around pt-5'>
                    <div className='bul'>
                        <h6>Your Vision, Our Future.</h6>
                        <h3>Committed to People, Committed </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className='buld buldd'>
                        <img src={buld} alt="bulb" />
                        <h3>Creative Ideas</h3>
                        <p>Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Sed  donec gravida </p>
                    </div>
                    <div className='buld'>
                        <img src={pen} alt="pencile" />
                        <h3>Beautiful Blog</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
                    </div>
                </section>

                <section className='d-flex flex-wrap justify-content-around  my-2'>
                    <div className='buld'>
                        <img src={user} alt="user" />
                        <h3>User Friendly</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
                    </div>
                    <div className='buld'>
                        <img src={set} alt="" />
                        <h3>Perfect Showcase</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
                    </div>
                    <div className='buld'>
                        <img src={hand} alt="" />
                        <h3>Easy to Use</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Section4