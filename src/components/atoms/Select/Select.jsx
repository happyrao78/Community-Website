import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ options, value, onChange, placeholder = "", size = 'md', variant = 'default', isDisabled = false }) => {
    const baseStyles = 'block px-3 w-full rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500';
    const sizeStyles = {
        sm: 'text-sm py-1 px-1',
        md: 'text-base py-2 px-4',
        lg: 'text-lg py-2 px-4',
    };
    const variantStyles = {
        default: '',
        rounded: 'rounded-full',
        outline: 'border-2 border-gray-300',
    };

    return (
        <select
            value={value}
            onChange={onChange}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isDisabled}
        >
            <option value="" disabled>{placeholder}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

Select.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    variant: PropTypes.oneOf(['default', 'rounded', 'outline']),
    isDisabled: PropTypes.bool,
};

export default Select;
