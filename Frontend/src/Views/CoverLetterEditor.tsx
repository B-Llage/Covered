import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Hooks/hooks';
import { setUserData } from '../Slices/FormSlice'

export default function CoverLetterEditor() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.userData);
  const [validation, setValidation] = useState('');
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserData({ userData: { ...userData, [event.target.name]: event.target.value } }))
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setUserData({ userData: { ...userData, [event.target.name]: event.target.value } }))
  }
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let validated = false;
    if (userData.name === '' ||
      userData.education === '' ||
      userData.schoolName === '' ||
      userData.location === '' ||
      userData.companyName === '' ||
      userData.position === '') {
      validated = false
    }
    else {
      validated = true
    }
    if (userData.education === "Bachelor's Degree" || userData.education === "PhD") {
      if (
        userData.degree === '' ) {
        validated = false;
      }
      else {
        validated = true
      }
    }
    if (validated) {
      navigate("/skills")
    }
    else {
      setValidation('is-invalid')
    }
  }

  return (
    <div className='w-100'>
      <form>
        <h1 className='text-center'>Let's make this quick</h1>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 p-2">
              <h5 className='text-start'>About You</h5>
              <hr></hr>
              <div className="form-floating mb-3">
                <input type="text" className={`form-control ${validation}`} id="floatingInput" name='name' placeholder="name" value={userData.name} onChange={handleChange} />
                <label htmlFor="floatingInput">Your Name</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className={`form-control ${validation}`} id="floatingInput" name='location' placeholder="location" value={userData.location} onChange={handleChange} />
                <label htmlFor="floatingInput">Where are you from?</label>
              </div>

              <select className={`form-select mb-3 ${validation}`} aria-label="Default select example" name='education' value={userData.education} onChange={handleSelect}>
                <option selected hidden value=''>Your Education</option>
                <option value="None">None</option>
                <option value="High School Degree">High School Degree</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="PhD">PhD</option>
              </select>

              {
                userData.education === "Bachelor's Degree" || userData.education === "PhD" ? <div className="form-floating mb-3">
                  <input type="text" className={`form-control ${validation}`} id="floatingInput" name='degree' placeholder="degree" value={userData.degree} onChange={handleChange} />
                  <label htmlFor="floatingInput">What is your Degree?</label>
                </div> : <></>
              }

              {userData.education === "None" ? <></> : <div className="form-floating mb-3">
                <input type="text" className={`form-control ${validation}`} id="floatingInput" name="schoolName" placeholder="name@example.com" value={userData.schoolName} onChange={handleChange} />
                <label htmlFor="floatingInput">School Name</label>
              </div>}


            </div>

            <div className="col-sm-12 col-md-6 p-2">
              <h5 className='text-start'>About The Job</h5>
              <hr></hr>
              <div className="form-floating mb-3">
                <input type="text" className={`form-control ${validation}`} id="floatingInput" name='position' placeholder="position" value={userData.position} onChange={handleChange} />
                <label htmlFor="floatingInput">The Position</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className={`form-control ${validation}`} id="floatingInput" name='companyName' placeholder="company name" value={userData.companyName} onChange={handleChange} />
                <label htmlFor="floatingInput">Company Name</label>
              </div>

            </div>
          </div>
        </div>
        <hr></hr>
        <button className='btn btn-primary shadow w-100 p-3' onClick={onSubmit}> Continue </button>
      </form>
    </div>
  )
}
