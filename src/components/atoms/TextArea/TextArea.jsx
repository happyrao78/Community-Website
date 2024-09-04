import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ placeholder = "", value, onChange = () => {}, disabled = false, size = 'md', variant = 'default', rows = 3 }) => {
    const baseStyles = 'border border-gray-300 bg-gray-50 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5';
    const sizeStyles = {
        sm: 'text-sm py-1 px-2',
        md: 'text-base py-2 px-3',
        lg: 'text-lg py-3 px-4',
    };
    const variantStyles = {
        default: '',
        rounded: 'rounded-full',
        outline: 'border-2 border-gray-300',
    };

    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`}
            rows={rows}
        />
    );
};

TextArea.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    variant: PropTypes.oneOf(['default', 'rounded', 'outline']),
    rows: PropTypes.number,
};

export default TextArea;
