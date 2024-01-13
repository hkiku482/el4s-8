import { Meta, StoryObj } from "@storybook/react";
import { ConfigModal } from "./ConfigModal";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const meta: Meta<typeof ConfigModal> = {
  component: undefined,
};
export default meta;

type Story = StoryObj<typeof ConfigModal>;

export const Main: Story = {
  render: () => {
    return (
      <MantineProvider>
        <ConfigModal opened onClose={() => {}} />
      </MantineProvider>
    );
  },
};
