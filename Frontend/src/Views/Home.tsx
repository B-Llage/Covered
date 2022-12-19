import React from 'react'
import { Link } from 'react-router-dom'
import '../../src/App.css'

export default function Home() {
  return (
    <div className='p-5 home-width w-100'>
      <div className='container d-flex justify-content-center align-items-end mb-1'>
        <img
          className="img-fluid me-2 mb-2"
          style={{ height: "6em", width: "auto" }}
          src={`${process.env.PUBLIC_URL}/images/Covered.png`}
          alt="logo"
        />
      </div>
      <h5 className='fs-6 text-center mb-1'>The average cover letter takes 6 hours to write</h5>
      <h1 className='text-center w-100'>We've got you <span className='fw-bold'>Covered</span></h1>
      <hr></hr>
      <Link to={"/editor"} className='btn btn-primary shadow w-100 p-3'>Let's Get Started</Link>
    </div>
  )
}
