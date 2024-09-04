import React, { useState } from 'react';
import CheckBox from './CheckBox';

export default {
    title: 'Components/CheckBox',
    component: CheckBox,
};

// Template for CheckBox
const Template = (args) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <CheckBox
            {...args}
            checked={isChecked}
            onChange={handleChange}
        />
    );
};

// Stories using the template
export const Default = Template.bind({});
Default.args = {
    label: 'Default CheckBox',
};

export const Small = Template.bind({});
Small.args = {
    label: 'Small CheckBox',
    size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
    label: 'Large CheckBox',
    size: 'lg',
};

export const Green = Template.bind({});
Green.args = {
    label: 'Green CheckBox',
    color: 'green',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled CheckBox',
    isDisabled: true,
};
