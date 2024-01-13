import { Box, CloseButton, Input } from "@mantine/core";

type Props = {
  urls: string;
  onClose: () => void;
};
export const IdLine = ({ urls, onClose }: Props) => {
  return (
    <Box>
      <Input
        w={"100%"}
        value={urls}
        rightSectionPointerEvents="all"
        rightSection={
          <CloseButton aria-label="close video" onClick={onClose} />
        }
      />
    </Box>
  );
};
