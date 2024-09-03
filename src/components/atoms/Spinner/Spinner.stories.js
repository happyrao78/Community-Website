import React from 'react';
import Spinner from './Spinner';

export default {
    title: 'Components/Spinner',
    component: Spinner,
};
const Template = (args) => <Spinner {...args} />;
export const Default = Template.bind({});
Default.args = {
    size: 24,
    color: '#3498db',
};
export const Large = Template.bind({});
Large.args = {
    size: 48,
    thickness: 5,
    color: '#000',
};