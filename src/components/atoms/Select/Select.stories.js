import React, { useState } from 'react';
import Select from './Select';

export default {
    title: 'Components/Select',
    component: Select,
};

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

export const Default = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Select
            options={options}
            value={selectedValue}
            onChange={handleChange}
            size='md'
            placeholder="Select an option"
        />
    );
};
export const Rounded = () => {  
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return <Select
        options={options}
        value={selectedValue}
        onChange={handleChange}
        placeholder="Rounded Select"
        variant="rounded"
    />
};
export const Outline = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return <Select
        options={options}
        value={selectedValue}
        onChange={handleChange}
        placeholder="Outline Select"
        variant="outline"
    />
};
export const Large = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return <Select
        options={options}
        value={selectedValue}
        onChange={handleChange}
        placeholder="Large Select"
        size="lg"
    />
};
export const Small = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return <Select
        options={options}
        value={selectedValue}
        onChange={handleChange}
        placeholder="Disabled Select"
        isDisabled={true}
    />
};