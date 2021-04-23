import React from 'react'
import { Container } from 'react-bootstrap'
import Signup from '../../components/Common/Homepage/Signup'
import './style.css'


export default function HomePage() {
  return (
    <Container>
      <div>
        <div><h1>Sign Up</h1></div>
      </div>
      <div id='welcome-container'>
        <div className='primary-bg try' id='left-side'>
          <div className='text-light'><h2>BLLTN-BRD</h2></div>
          <div className='text-light'><h4>Changing the way people think about portfolio websites</h4>
            <h2>Spark the Revolution</h2>
          </div>
        </div>
        <div><Signup /></div>
      </div>
    </Container>
  )
}
