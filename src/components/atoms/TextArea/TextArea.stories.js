import React, { useState } from 'react';
import TextArea from './TextArea';

export default {
    title: 'Atoms/TextArea',
    component: TextArea,
};

// Template for TextArea
const Template = (args) => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <TextArea
            {...args}
            value={text}
            onChange={handleChange}
        />
    );
};

// Stories using the template
export const Default = Template.bind({});
Default.args = {
    placeholder: 'Enter your text here',
};

export const Small = Template.bind({});
Small.args = {
    placeholder: 'Small TextArea',
    size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
    placeholder: 'Large TextArea',
    size: 'lg',
};

export const Rounded = Template.bind({});
Rounded.args = {
    placeholder: 'Rounded TextArea',
    variant: 'rounded',
};

export const Outline = Template.bind({});
Outline.args = {
    placeholder: 'Outline TextArea',
    variant: 'outline',
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: 'Disabled TextArea',
    disabled: true,
};
