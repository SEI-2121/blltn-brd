import React from 'react'
import Signup from './Signup'
import Login from './Login'
import Header from './Header'
import Navbar from '../Common/Navbar'


export default function HomePage() {
    return (
      <div>
        <Header />
        <Navbar />
        <Login />
        <Signup />  
        
        </div>
  
    )
  }
