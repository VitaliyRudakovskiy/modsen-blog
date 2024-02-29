import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    children: "Don't click me",
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Click me',
  },
};
