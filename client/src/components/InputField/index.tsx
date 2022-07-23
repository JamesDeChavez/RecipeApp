import * as React from 'react';
import './styles.css';

interface Props {
    id: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error: string
}

const className = 'InputField';

const InputField: React.FC<Props> = ({ id, placeholder, value, onChange, error }) => {
    return (
        <div className={className}>
            <input
                className={`${className}_input`} 
                type='text'
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <span className={`${className}_error`}>{error}</span>
        </div>
    );
};

export default InputField;