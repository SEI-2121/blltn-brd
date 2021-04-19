import React from 'react'
import Signup from './Signup'
import Login from './Login'
import Header from './Header'
import Navbar from '../Navbar'


export default function HomePage() {
    return (
      <div>
        <Header />
        <Login />
        <Signup />  
        <Navbar />
        </div>
  
    )
  }
