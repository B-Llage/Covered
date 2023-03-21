import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import { useAppSelector } from '../../Hooks/hooks';
import { PuffLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import CoverLetterPreview from '../../Components/UI/Preview/CoverLetterPreview';
import { PDFDownloadLink } from '@react-pdf/renderer';

export default function Result() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true)
    const [result, setResult] = useState('')

    const userData = useAppSelector(state => state.userData);
    const skills = useAppSelector(state => state.skills);

    const currentDate = new Date().toLocaleDateString();
    const file = <CoverLetterPreview title={userData.name} date={currentDate} content={result} />

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
            userData.position === '' ||
            userData.location === ''
        ) {
            console.log(userData)
            navigate('/editor')
        }
        else {
            generateCoverLetter().then(() => {
                setIsLoading(false)
            })
        }
    }, [navigate, userData, skills])

    return (
        <>
            {
                isLoading ?
                    <div className='p-4'>
                        <h1 className='text-center'>Loading</h1>
                        <hr></hr>
                        <div className='d-flex justify-content-center'>
                            <PuffLoader
                                className='py-4'
                                color={"#527abc"}

                                aria-label="Loading Spinner" />
                        </div>
                    </div>
                    :
                    <div>
                            <h1 className='text-center fw-bold mb-0'>Result</h1>
                        <div className='d-flex justify-content-center align-items-center w-100'>
                            <div>
                                <PDFDownloadLink document={file} className="btn btn-primary shadow-sm py-2 mt-2" fileName="cover_letter.pdf">
                                    {({ blob, url, loading, error }) =>
                                        loading ? 'Loading document...' : 'Save as PDF'
                                    }
                                </PDFDownloadLink>
                            </div>
                        </div>

                        <hr></hr>
                        <div className="row justify-content-center">
                            <div className={`col-md-6 col-xs-12 border border-2 rounded shadow ${isMobile ? '' : 'p-5'}`}>
                                <h1 className='text-center'>{userData.name}</h1>
                                <hr></hr>
                                <p>{currentDate}</p>
                                <ReactMarkdown className='text-start text-wrap'>{result}</ReactMarkdown>
                            </div>
                        </div>

                        <div className='container'>
                        </div>


                    </div>
            }
        </>
    )
}