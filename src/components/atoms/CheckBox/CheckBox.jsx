import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ checked, onChange, label, size = 'md', color = 'blue', isDisabled = false }) => {
    const sizeStyles = {
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
    };
    const colorStyles = {
        blue: 'text-blue-600',
        green: 'text-green-600',
        red: 'text-red-600',
    };

    return (
        <label className="flex items-center space-x-2">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className={`form-checkbox ${sizeStyles[size]} ${colorStyles[color]} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isDisabled}
            />
            <span className="text-gray-900">{label}</span>
        </label>
    );
};

CheckBox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    color: PropTypes.oneOf(['blue', 'green', 'red']),
    isDisabled: PropTypes.bool,
};

export default CheckBox;
