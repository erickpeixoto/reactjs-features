import { Meta, StoryObj } from "@storybook/react";
import { List } from "../app/components/List";

//meta
const meta = {
    title: "TSX/Rendering List",
    component: List,

} satisfies Meta<typeof List>;
export default meta;

//type
type Story = StoryObj<typeof meta>

//cosnt
export const Renderization: Story = { }


