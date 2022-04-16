import React from 'react'

const FormCheckBox = ({ inputValue, onChange, onBlur, error, touched, className = "", label, name }) => {
    return (

        <>
            <input
                className={`${className} ${touched && error && 'invalid-checkbox'}`}
                defaultChecked={inputValue && 'checked'}
                onChange={onChange}
                type="checkbox"
                name={name}
                onBlur={onBlur}
            />
            <span>{label}</span>
        </>



    )
}

export default FormCheckBox