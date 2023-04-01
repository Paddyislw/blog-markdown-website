import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import './Layout.css'

const Layout = ({children}) => {
  return (
    <div className='flex h-[100dvh] flex-col'>
        <NavBar />
        <div className='grow'>
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout