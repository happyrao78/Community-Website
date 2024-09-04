import React from "react";
import InputField from "./InputField";

export default {
    title: "Components/InputField",
    component: InputField,
};

const Template = (args) => <InputField {...args} />;

// Default Input Field story
export const Default = Template.bind({});
Default.args = {
    type: "text",
    placeholder: "Enter text...",
    size: "md",
    value: "",
};

export const Password = Template.bind({});
Password.args = {
    type: "password",
    placeholder: "Enter password...",
    value: "",
    onChange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
    type: "text",
    placeholder: "Disabled input...",
    value: "",
    onChange: () => {},
    disabled: true,
};

export const WithValue = Template.bind({});
WithValue.args = {
    type: "text",
    placeholder: "Enter text...",
    value: "Pre-filled value",
    onChange: () => {},
};
