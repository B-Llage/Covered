import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SelectInput from '../../Components/UI/Form/SelectInput';
import TextInput from '../../Components/UI/Form/TextInput';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { setFormFieldsErrors, setFormFieldsValidity, setFormIsValid, setUserData } from '../../Slices/FormSlice'

export default function CoverLetterEditor() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.userData);
  const formIsValid = useAppSelector(state => state.formIsValid);
  const formFieldsErrors = useAppSelector(state => state.formFieldsErrors);
  const formFieldsValidity = useAppSelector(state => state.formFieldsValidity);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserData({ userData: { ...userData, [event.target.name]: event.target.value } }))
    //validate field for each form error
    validateField(event.target.name, event.target.value)
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setUserData({ userData: { ...userData, [event.target.name]: event.target.value } }))
    validateField(event.target.name, event.target.value)
  }
  const validateField = (fieldName: String, value: String) => {
    switch (fieldName) {
      case 'name':
        if (value.length === 0) {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, name: true } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, name: false } }))
        }
        else {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, name: false } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, name: true } }))
        }
        break;
      case 'education':

        if (value.length === 0) {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, education: true } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, education: false } }))
        }

        else {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, education: false } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, education: true } }))
        }
        break;
      case 'schoolName':
        if (value.length === 0) {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, schoolName: true } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, schoolName: false } }))
        }
        else {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, schoolName: false } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, schoolName: true } }))
        }
        break;
      case 'location':
        if (value.length === 0) {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, location: true } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, location: false } }))
        }
        else {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, location: false } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, location: true } }))
        }
        break;
      case 'companyName':
        if (value.length === 0) {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, companyName: true } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, companyName: false } }))
        }
        else {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, companyName: false } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, companyName: true } }))
        }
        break;
      case 'position':
        if (value.length === 0) {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, position: true } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, position: false } }))
        }
        else {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, position: false } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, position: true } }))
        }
        break;
      case 'degree':
        console.log(value)
        if (value.length === 0) {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, degree: true } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, degree: false } }))
        }
        else {
          dispatch(setFormFieldsErrors({ formFieldsErrors: { ...formFieldsErrors, degree: false } }))
          dispatch(setFormFieldsValidity({ formFieldsValidity: { ...formFieldsValidity, degree: true } }))
        }
        break;
      default:
        break;
    }
  }

 

  useEffect(() => {
    const validateForm = () => {
  
      if (formFieldsValidity.name === false ||
        formFieldsValidity.education === false ||
        formFieldsValidity.location === false ||
        formFieldsValidity.companyName === false ||
        formFieldsValidity.position === false) {
        dispatch(setFormIsValid({ formIsValid: false }))
  
      }
      else {
        switch (userData.education) {
          case "High School Degree":
            if (formFieldsValidity.schoolName === false) {
              dispatch(setFormIsValid({ formIsValid: false }))
            }
            else {
              dispatch(setFormIsValid({ formIsValid: true }))
            }
            break;
          case "Bachelor's Degree":
          case "PhD":
            if (formFieldsValidity.schoolName === false || formFieldsValidity.degree === false) {
              dispatch(setFormIsValid({ formIsValid: false }))
            }
            else {
              dispatch(setFormIsValid({ formIsValid: true }))
            }
            break;
          case "None":
          default:
            dispatch(setFormIsValid({ formIsValid: true }))
            break;
        }
      }
    }
    validateForm()
  }, [formFieldsErrors, dispatch, formFieldsValidity, userData.education])

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    //validate all fields 
    console.log(userData)
    validateField('name', userData.name)
    validateField('education', userData.education)
    validateField('schoolName', userData.schoolName)
    validateField('location', userData.location)
    validateField('companyName', userData.companyName)
    validateField('position', userData.position)
    validateField('degree', userData.degree)
    //if form is valid, navigate to next page
    if (formIsValid) {
      navigate("../skills")
    }
  }

  return (
    <div>
      <form>
        <h1 className='text-center fw-bold'>Let's make this about you</h1>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 p-1">
              <h5 className='text-start'>Tell us about yourself</h5>
              <hr></hr>

              <TextInput label='Your Name' name='name' value={userData.name} onChange={handleChange} error={formFieldsErrors.name}></TextInput>
              <TextInput label='Your Location' name='location' value={userData.location} onChange={handleChange} error={formFieldsErrors.location}></TextInput>
              <SelectInput
                name={'education'}
                defaultValue={
                  { label: 'Your Education', value: 'Lol' }
                }
                options={[
                  { label: 'None', value: 'None' },
                  { label: 'High School Degree', value: 'High School Degree' },
                  { label: "Bachelor's Degree", value: "Bachelor's Degree" },
                  { label: 'PhD', value: 'PhD' }
                ]}
                value={userData.education}
                onChange={handleSelect} />

              {
                userData.education === "Bachelor's Degree" || userData.education === "PhD" ?
                  <TextInput label='Degree' name='degree' value={userData.degree} onChange={handleChange} error={formFieldsErrors.degree}></TextInput> :
                  <></>
              }

              {userData.education === "None" || userData.education === "" ?
                <></> :
                <TextInput label='School Name' name='schoolName' value={userData.schoolName} onChange={handleChange} error={formFieldsErrors.schoolName}></TextInput>
              }


            </div>

            <div className="col-sm-12 col-md-6 p-1">
              <h5 className='text-start'>Where are you applying?</h5>
              <hr></hr>
              <TextInput label='Company Name' name='companyName' value={userData.companyName} onChange={handleChange} error={formFieldsErrors.companyName}></TextInput>
              <TextInput label='The Position' name='position' value={userData.position} onChange={handleChange} error={formFieldsErrors.position}></TextInput>
            </div>
          </div>
        </div>
        <hr></hr>
        <button className={`btn btn-primary shadow w-100 p-3`} onClick={onSubmit} disabled={!formIsValid}> {formIsValid ? 'Continue' : 'Please fill all fields'} </button>
      </form>
    </div>
  )
}
