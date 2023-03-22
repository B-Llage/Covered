import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../UI/Navbar'

export default function CoverLetterLayout() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  const isMobile = width <= 768;
  return (
    <div className="App" style={{ background: 'linear-gradient(-225deg, rgb(44, 60, 148), rgb(44, 148, 123))' }}>
      <Navbar brandName='Covered' logo={`${process.env.PUBLIC_URL}/images/Covered.png`}/>
      <div className='h-100 w-100 main-content container d-flex justify-content-center align-items-center'>
        <div className={`bg-light rounded-3 ${isMobile? 'p-3' : 'p-5'}`}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}
