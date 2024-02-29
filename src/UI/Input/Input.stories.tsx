import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: 'Input your email',
  },
};
