import React from 'react'
import logo from '../assets/logo.png'
import banner from '../assets/banner.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/banner.css'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Banner = () => {
  return (
    <div className='banner'>

      <Navbar expand="lg" className='nav mt-5 mx-auto'>
        <Container>
          <Navbar.Brand className=' fs-4 fw-bold'>
            <a to='/' className='text-decoration-none text-white '> <img src={logo} alt="" /></a>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white fs-1 rounded-3' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <a to='/' className='text-decoration-none text-white fs-3 fw-light mx-3'>Home</a>

              <a to='/about' className='text-decoration-none text-white fs-3 fw-light mx-3' >About</a>
              <a to='/' className='text-decoration-none text-white fs-3 fw-light mx-3'>Contact</a>
              <a to='/' className='text-decoration-none text-white fs-3 fw-light mx-3'>Testimonial</a>
              <a to='/' className='text-decoration-none text-white fs-3 fw-light mx-3'>Priceing</a>
            </Nav>

            <Nav className="ms-auto">
              <Button variant="outline-white" className='fs-2' >Search</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <section className='two d-md-flex justify-content-evenly'>

        <div className="text mx-auto">
          <h5>Insh5iration Technology.</h5>
          <div className="run">
            <h4> <span> Runs faster. </span> <br />
              Costs less and <br />never breaks. </h4>
          </div>
          <hr className='hr' />
          <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat </p>
          <div className="btnn my-3"> <button className='get'>Get Started</button>  <button className='free'>Free Trail</button> </div>
        </div>
       

        <div className="img"><img src={banner} alt="" className='img-fluid ' /></div>
      </section>

    </div>
  )
}

export default Banner