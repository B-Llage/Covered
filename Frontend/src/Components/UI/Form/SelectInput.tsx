import React from 'react';

interface SelectInputProps {
  label: string;
  name: string;
  options: { value: string, label: string }[];
  defaultValue: { value: string, label: string };
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: boolean;
}

export default function SelectInput(props: SelectInputProps) {
  const { label, name, options, value, defaultValue, onChange, error } = props;
  return (
    <>
      <div className="form mb-3">
        <select
          className={`form-select ${error ? 'is-invalid' : ''}`}
          name={name}
          value={value}
          onChange={onChange}>
          <option selected hidden value={defaultValue.value}>{defaultValue.label}</option>
          {options.map((option, index) => {
            return (

              <option key={index} value={option.value}>{option.label}</option>
            )
          }
          )}
        </select>
      </div>
    </>
  );
};
