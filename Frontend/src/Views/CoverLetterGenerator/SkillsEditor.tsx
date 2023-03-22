import React from 'react'
import { Link } from 'react-router-dom';
import SkillInput from '../../Components/UI/SkillInput';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { setSkills } from '../../Slices/FormSlice';

export default function SkillsEditor() {
    const dispatch = useAppDispatch();
    const skills = useAppSelector(state => state.skills);

    const handleAddButton = () => {
        if (skills.length < 5) {
            dispatch(setSkills({ skills: [...skills, ''] }))
        }
    }
    const handleRemove = (index: number) => {
        if (skills.length > 1) {
            let updatedArray = skills.filter((_, i) => i !== index)
            dispatch(setSkills({ skills: updatedArray }))
        }
    }
    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        let updatedArray = [...skills];
        updatedArray[index] = event.target.value;
        dispatch(setSkills({ skills: updatedArray }))
    }
    return (
        <form className='w-100 p-1'>
            <h1 className='text-center fw-bold'>What are you great at?</h1>
            <hr></hr>
            {
                skills.map((skill, index) => {
                    return <SkillInput key={index}
                        skill={skill}
                        index={index}
                        handleChange={handleChange}
                        handleRemove={handleRemove} />
                })
            }
            {
                skills.length < 5 ?
                    <button type="button" className="btn btn-success w-100 mb-3 py-3" onClick={handleAddButton}>Add Skill</button> :
                    <></>
            }
            <hr className='mb-3'></hr>
            <div className='d-flex'>
                <Link to={"../job"} className='btn btn-primary shadow me-2 w-100 p-3'>Back</Link>
                <Link to={"../summary"} className='btn btn-primary shadow ms-2 w-100 p-3'>Continue</Link>
            </div>
        </form>
    )
}
