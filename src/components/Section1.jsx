import React from 'react'
import image from '../assets/image25.png'
import amazon from '../assets/amazon.png'
import fedx from '../assets/fedx.png'
import google from '../assets/google.png'
import micro from '../assets/microsoft.png'
import walmat from '../assets/walmat.png'
import olaa from '../assets/olaa.png'

const Section1 = () => {
  return (<div>
    <div className='d-flex flex-wrap justify-content-around gap-3 my-5'>
<img src={image} alt="image" />
<img src={google} alt="image" />
<img src={olaa} alt="image" />
<img src={micro} alt="image" />
    </div>
    <div className='d-flex flex-wrap justify-content-around my-4 gap-3'>
      <img src={amazon} alt="image" /> 
      <img src={fedx} alt="image" />
      <img src={walmat} alt="image" />
    </div>

    </div>
  )
}

export default Section1