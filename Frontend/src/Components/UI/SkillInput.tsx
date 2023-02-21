import React from 'react'

type SkillInputProps = {
    skill: string,
    index: number,
    handleChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void
    handleRemove: (index: number) => void

}

export default function SkillInput({ skill, index, handleChange, handleRemove }: SkillInputProps) {
    return (
        <div className="input-group mb-3 shadow-sm">
            <div className="form-floating w-75">
                <input type="text" className="form-control" id="floatingInput" placeholder="Skill" value={skill} onChange={(e)=>{handleChange(index, e)}}/>
                <label htmlFor="floatingInput">Skill</label>
            </div>
            <button type="button" className="btn btn-danger w-25 display-1 fw-bold" tabIndex={-1} onClick={() => { handleRemove(index) }}>-</button>
        </div>

    )
}