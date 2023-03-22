import React from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../Hooks/hooks';

export default function Summary() {
    const skills = useAppSelector(state => state.skills);
    const userData = useAppSelector(state => state.userData);

    return (
        <div className='container px-5'>
            <h1 className='text-center fw-bold'>Does this sound right?</h1>
            <hr></hr>
            <div className='text-start'>
                <div>My name is {userData.name}, I'm currently in {userData.location}.</div>
                {userData.education === 'None' ? <p>I have no previous education.</p> :
                    <>
                        {
                            userData.education === 'High School Degree' ?
                                <p>I have a {userData.education} from {userData.schoolName}.</p> :
                                <p>I have a {userData.education} from {userData.schoolName} in {userData.degree}.</p>
                        }

                    </>}
                <div>I'm great at:</div>

                <ul>
                {skills.map((skill, index) => { return <li className='m-0' key={index}>{skill}</li> })}
                </ul>

                <div className='my-3'>I'm applying for the position of {userData.position} at {userData.companyName}.</div>
                <hr></hr>
                <div className='d-flex'>
                    <Link to={"../skills"} className='btn btn-primary shadow me-2 w-100 p-3'>Back</Link>
                    <Link to={"../result"} className='btn btn-primary shadow ms-2 w-100 p-3'>I'm Done!</Link>
                </div>
            </div>
        </div>
    )
}
