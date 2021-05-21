import React from 'react';
import { Story, Meta } from '@storybook/react';
import HW12 from "./HW12";
import {ReduxStoreProviderDecorator} from "./HW12Provider";

export default {
    title: 'Example/HW-12',
    component: HW12,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

const Template: Story = () => <HW12/>;

export const HW12Example = Template.bind({});



