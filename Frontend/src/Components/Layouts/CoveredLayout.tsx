import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../UI/Navbar'

export default function MainLayout() {
  return (
    <div className="App" style={{ background: 'linear-gradient(-225deg, rgb(44, 60, 148), rgb(44, 148, 123))' }}>
      <Navbar />
      <div className='h-100 main-content container d-flex justify-content-center align-items-center'>
        <div className='bg-light rounded-3 p-5'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}
