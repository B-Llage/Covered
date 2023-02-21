import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from "typewriter-effect";
import '../../src/App.css'

export default function Home() {
  return (
    <div className='container py-2 px-0 m-0'>
      <div className='mb-1'>
        <h1 className='display-1 fw-bold text-start'>
          AI cover letters, tailored to perfection.
        </h1>
      </div>
      <hr></hr>
      <Link to={"/editor"} className='btn btn-primary shadow p-4'>Let's Get Started</Link>
    </div>
  )
}
