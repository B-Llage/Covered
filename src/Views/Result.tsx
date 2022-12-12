import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useAppSelector } from '../Hooks/hooks';
import ReactMarkdown from 'react-markdown'
import { PuffLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

export default function Result() {
    const [isLoading, setIsLoading] = useState(true)
    const [result, setResult] = useState('')
    const userData = useAppSelector(state => state.userData);
    const skills = useAppSelector(state => state.skills);
    const navigate = useNavigate();
    useEffect(() => {

        const generateCoverLetter = async () => {

            const result = await axios.post(
                "https://e85d1y9k73.execute-api.us-west-1.amazonaws.com/CoveredRequest",
                {
                    "userData": userData,
                    "skills": skills,
                }
            )
            setResult(result.data.result)
        }
        if (
            userData.name === '' ||
            userData.companyName === '' ||
            userData.degree === '' ||
            userData.position === '' ||
            userData.location === ''

        ) {
            navigate('/editor')
        }
        else {
            generateCoverLetter().then(() => {
                setIsLoading(false)
            })
        }

    }, [])


    return (
        <div className='d-flex justify-content-center p-3'>
            {
                isLoading ?
                    <div className='container'>
                        <h1 className='text-center'>Loading...</h1>
                        <hr></hr>
                        <div className='d-flex justify-content-center'>
                            <PuffLoader
                                className='py-4'
                                color={"#527abc"}

                                aria-label="Loading Spinner" />
                        </div>
                    </div>
                    :
                    <div className='home-width'>
                        <h1 className='text-center'>Result</h1>
                        <hr></hr>
                        <ReactMarkdown>{result}</ReactMarkdown>
                    </div>
            }
        </div>
    )
}