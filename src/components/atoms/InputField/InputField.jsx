import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ type = "text", placeholder = "", value, onChange, disabled = false }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className="px-4 py-2 border rounded"
        />
    );
};

InputField.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
};

export default InputField;
