import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

const Spinner = ({ size = 24, thickness = '3' ,color = '#3498db' }) => {
    const SpinnerStyle = {
        width: size,
        height: size,
        border: `${thickness}px solid #f3f3f3`,
        borderTop: `${thickness}px solid ${color}`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    };

    return (
        <div style={SpinnerStyle}></div>
    );
};

Spinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};

export default Spinner;
