import React from 'react'
import { Link } from 'react-router-dom'
import '../../../src/App.css'

export default function CoverLetterHome() {
  return (
    <div className='container py-2 px-0 m-0'>
      <div className='mb-1'>
        <h1 className='display-1 fw-bold text-start'>
          AI cover letters, tailored to perfection.
        </h1>
      </div>
      <hr></hr>
      <Link to={"you"} className='btn btn-primary shadow p-4'>Generate a Cover Letter</Link>

    </div>
  )
}
