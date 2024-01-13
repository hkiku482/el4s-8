import { Box, CloseButton, Input } from "@mantine/core";

type Props = {
  vid: string;
  onClose: () => void;
};
export const IdLine = ({ vid, onClose }: Props) => {
  // TODO: 既存のvidの編集
  return (
    <Box>
      <Input
        w={"100%"}
        value={vid}
        rightSectionPointerEvents="all"
        rightSection={
          <CloseButton aria-label="close video" onClick={onClose} />
        }
      />
    </Box>
  );
};
