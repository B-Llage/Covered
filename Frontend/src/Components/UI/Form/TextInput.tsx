import React from 'react';

interface TextInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
}

export default function TextInput(props: TextInputProps) {
    const { label, name, value, onChange, error } = props;
    return (
        <>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className={`form-control ${error ? 'is-invalid' : ''}`}
                    id="floatingInput"
                    name={name}
                    placeholder={label}
                    value={value}
                    onChange={onChange} />
                <label htmlFor="floatingInput">{label}</label>
            </div>
        </>
    );
};
