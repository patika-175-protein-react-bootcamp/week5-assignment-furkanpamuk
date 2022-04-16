import React from 'react'

const FormInput = ({ label, name, onChange, onBlur, inputValue, error, touched, className = "", inputClass = "", placeHolder, type = "text" }) => {
    return (
        <div className={className}>
            <p>{label}</p>
            <input
                onChange={onChange}
                onBlur={onBlur}
                value={inputValue}
                name={name}
                className={inputClass}
                placeholder={placeHolder}
                type={type}
            />
            {
                touched && error &&
                <span className="errorSpan">{error}</span>
            }
        </div>
    )
}

export default FormInput