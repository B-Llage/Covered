import React from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../Hooks/hooks';

export default function Summary() {
    const skills = useAppSelector(state => state.skills);
    const userData = useAppSelector(state => state.userData);

    return (
        <div className='container px-5'>
            <h1 className='text-center'>Does this sound right?</h1>
            <hr></hr>
            <div className='text-center'>
                <div>My name is {userData.name}, I'm from {userData.location}.</div>
                {userData.education === 'None' ? <div>I have no previous education.</div> :
                    <>
                        <div>I have a {userData.education} from {userData.schoolName}</div>
                    </>}

                <hr></hr>
                <div>These are my some of my skills:</div>
                {skills.map((skill, index) => { return <p className='m-0' key={index}>- {skill}</p> })}
                <hr></hr>

                <div className='my-3'>I'm applying for the position of {userData.position} at {userData.companyName}</div>
                <Link to={"/editor"} className='btn btn-danger shadow w-50 p-3'>Go Back</Link>
                <Link to={"/result"} className='btn btn-primary shadow w-50 p-3'>Continue</Link>
            </div>
        </div>
    )
}
