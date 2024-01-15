import { Meta, StoryObj } from "@storybook/react";

import { Card } from "../app/components/Card";

const meta = {
    title: 'JSX/How to write JSX',
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
      image: '',
      title: 'Card',
      description: 'This is a card',
    },
  };