import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ type = "text", placeholder = "", value = '', onChange = () => {}, disabled = false, size = 'md' }) => {
    const baseStyles = 'bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500';
    const sizeStyles = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`${baseStyles} ${sizeStyles[size]}`}
        />
    );
};

InputField.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
};

export default InputField;
