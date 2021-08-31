import React from 'react'
import Header from './Header/header'
import Navbar from './Navbar/navbar'

const Layout = ({children}) => {
    return (
        <>
           <Header/>
           <Navbar/>
           {children}
        </>
    )
}

export default Layout
