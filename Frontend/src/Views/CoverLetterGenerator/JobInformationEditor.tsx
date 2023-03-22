import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SelectInput from '../../Components/UI/Form/SelectInput';
import TextInput from '../../Components/UI/Form/TextInput';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { setFormFieldsErrors, setFormFieldsValidity, setFormIsValid, setUserData } from '../../Slices/FormSlice'

export default function JobInformationEditor() {
    const dispatch = useAppDispatch();
    const userData = useAppSelector(state => state.userData);
    const formIsValid = useAppSelector(state => state.formIsValid);
    const formFieldsErrors = useAppSelector(state => state.formFieldsErrors);
    const formFieldsValidity = useAppSelector(state => state.formFieldsValidity);
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setUserData({ userData: { ...userData, [event.target.name]: event.target.value } }))
        validateField(event.target.name, event.target.value)
    };
    const validateField = (fieldName: String, value: String) => {
        switch (fieldName) {
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
            default:
                break;
        }
    }



    useEffect(() => {
        const validateForm = () => {

            if (formFieldsValidity.companyName === false ||
                formFieldsValidity.position === false) {
                dispatch(setFormIsValid({ formIsValid: false }))
            }
            else {
                dispatch(setFormIsValid({ formIsValid: true }))
            }
        }
        validateForm()
    }, [formFieldsErrors, dispatch, formFieldsValidity, userData.education])

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //validate all fields 

        validateField('companyName', userData.companyName)
        validateField('position', userData.position)
        //if form is valid, navigate to next page
        if (formIsValid) {
            navigate("../skills")
        }
    }

    return (
        <div>
            <form>
                <h1 className='text-center fw-bold'>Tell us about the job you want</h1>
                <hr></hr>
                <div className="container">
                    <TextInput label='Company Name' name='companyName' value={userData.companyName} onChange={handleChange} error={formFieldsErrors.companyName}></TextInput>
                    <TextInput label='The Position' name='position' value={userData.position} onChange={handleChange} error={formFieldsErrors.position}></TextInput>
                </div>
                <hr></hr>
                <div className='d-flex'>
                    <Link to={"../you"} className='btn btn-primary shadow me-2 w-100 p-3'>Back</Link>
                    <button className='btn btn-primary shadow w-100 ms-2 p-3' onClick={onSubmit} disabled={!formIsValid}> {formIsValid ? 'Continue' : 'Please fill all fields'} </button>
                </div>
            </form>
        </div>
    )
}
