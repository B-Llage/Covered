import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useAppSelector } from '../Hooks/hooks';
import ReactMarkdown from 'react-markdown'

export default function Result() {
    const [isLoading, setIsLoading] = useState(true)
    const [result, setResult] = useState('')
    const userData = useAppSelector(state => state.userData);
    const skills = useAppSelector(state => state.skills);
    useEffect(() => {

        const generateCoverLetter = async () => {

            const skillsString = skills.join(', ')
            let prompt = ''
            if (userData.education === 'None') {
                prompt = `Generate cover letter for a ${userData.position} position at ${userData.companyName}. The name of the applicant is ${userData.name}, they are from ${userData.location}. Skills include . Letter is addressed to ${userData.companyName} Hiring Committee. Candidate is skilled in: ${skillsString}.`
            }
            else if (userData.education === 'High School Degree') {
                prompt = `Generate cover letter for a ${userData.position} position at ${userData.companyName}. The name of the applicant is ${userData.name}, they are from ${userData.location}. The applicant education is a ${userData.education} from ${userData.schoolName}. Skills include . Letter is addressed to ${userData.companyName} Hiring Committee. Candidate is skilled in: ${skillsString}.`
            }
            else if (userData.education === "Bachelor's Degree" || userData.education === "PhD") {
                prompt = `Generate cover letter for a ${userData.position} position at ${userData.companyName}. The name of the applicant is ${userData.name}, they are from ${userData.location}. The applicant education is a ${userData.education} in ${userData.degree} from ${userData.schoolName}. Skills include . Letter is addressed to ${userData.companyName} Hiring Committee. Candidate is skilled in: ${skillsString}.`
            }

            const result = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    "model": "text-davinci-003",
                    "prompt": prompt,
                    "max_tokens": 1500
                },
                {
                    headers: { Authorization: `Bearer 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` }
                }
            )
            console.log(result.data.choices[0].text)
            setResult(result.data.choices[0].text)
        }
        generateCoverLetter().then(() => {
            setIsLoading(false)
            console.log("success")
        })

    }, [])


    return (
        <div className='home-width p-3'>
            <h1 className='text-center'>Result</h1>
            <hr></hr>
            {
                isLoading ? <p>Loading</p> : <ReactMarkdown>{result}</ReactMarkdown>
            }
        </div>
    )
}