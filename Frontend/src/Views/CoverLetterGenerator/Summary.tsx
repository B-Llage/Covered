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
                <div>My name is <span className='fw-bold'>{userData.name}</span>, I'm from <span className='fw-bold'>{userData.location}</span>.</div>
                {userData.education === 'None' ? <div>I have no previous education.</div> :
                    <>
                        {
                            userData.education === 'High School Degree' ?
                                <div>I have a <span className='fw-bold'>{userData.education}</span> from <span className='fw-bold'>{userData.schoolName}</span>.</div> :
                                <div>I have a <span className='fw-bold'>{userData.education}</span> from <span className='fw-bold'>{userData.schoolName}</span> in <span className='fw-bold'>{userData.degree}</span>.</div>
                        }

                    </>}
                <div>These are my some of my skills:</div>
                {skills.map((skill, index) => { return <p className='m-0' key={index}>- <span className='fw-bold'>{skill}</span></p> })}

                <div className='my-3'>I'm applying for the position of <span className='fw-bold'>{userData.position}</span> at <span className='fw-bold'>{userData.companyName}</span>.</div>
                <div className='d-flex'>
                    <Link to={"../skills"} className='btn btn-secondary shadow m-2 w-100 p-3'>Back</Link>
                    <Link to={"../result"} className='btn btn-primary shadow m-2 w-100 p-3'>I'm Done!</Link>
                </div>
            </div>
        </div>
    )
}
