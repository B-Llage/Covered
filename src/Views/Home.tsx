import React from 'react'
import { Link } from 'react-router-dom'
import '../../src/App.css'

export default function Home() {
  return (
    <div className='py-5 home-width'>
      <div className='container d-flex justify-content-center align-items-end'>
        <img
          className="img-fluid mx-2"
          style={{ height: "15vh", width: "auto" }}
          src={`${process.env.PUBLIC_URL}/images/Covered.png`}
          alt="logo"
        />
        <h1 className='display-1 fw-bold mb-2 text-center'>Covered</h1>
      </div>
      <hr></hr>
      <h5 className='text-start'>Dear User,</h5>
      <p className='text-start text-wrap'>I am excited to introduce myself as your new Cover Letter Generator software! I use OpenAI technology to generate high-quality cover letters that are tailored to your specific needs.</p>
      <p className='text-start text-wrap'>I understand that writing a cover letter can be a daunting task, so I have made it my mission to make the process as simple and straightforward as possible. With me you can create a professional and effective cover letter quickly and easily.</p>
      <p className='text-start text-wrap'>This particular paragraph was generated with the same technology I will use for your own cover letters, I hope you find it to be useful.</p>
      <p className='text-end fst-italic'>Best regards, Covered</p>
      <hr></hr>
      <Link to={"/editor"} className='btn btn-primary shadow'>Let's Get Started</Link>
    </div>
  )
}
