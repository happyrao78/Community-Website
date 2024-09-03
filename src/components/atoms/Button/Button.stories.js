import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
  size: 'md',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  size: 'md',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  variant: 'danger',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  variant: 'primary',
  size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  variant: 'primary',
  size: 'sm',
};