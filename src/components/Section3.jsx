import React from 'react'
import '../styles/section3.css'
import bg from '../assets/bg.png'

const Section3 = () => {
  return (
    <div className='sec3 d-flex flex-wrap justify-content-around gap-3 my-5'>
        <div className='hap text-center pt-5 '>
            <h1>50+</h1>
            <p>Happy  Clients</p>
        </div>
        <div className='hap text-center pt-5'>
            <h1>550+</h1>
            <p>Projects Completed</p>
        </div>
        <div className='hap text-center pt-5'>
            <h1>250</h1>
            <p>Dedicated Members</p>
        </div>
        <div className='hap text-center pt-5'>
            <h1>30+</h1>
            <p>Awards Won</p>
        </div>

    </div>
  )
}

export default Section3