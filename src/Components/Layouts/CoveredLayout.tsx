import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../UI/Navbar'

export default function CoveredLayout() {
  return (
    <div className="App">
      <div className='h-100 main-content d-flex flex-column align-items-center justify-content-center' style={{ background: `linear-gradient(-225deg, #2c3c94, #2c947b)`, minHeight: '100vh', height: '100%' }}>
        <div className='container p-2 mx-2 my-5 w-auto d-flex align-items-center justify-content-center bg-light shadow rounded'>
          <Outlet></Outlet>
        </div>
        <div style={{ height: "5vh" }}></div>
        <Navbar />
      </div>
    </div>
  )
}
