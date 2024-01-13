import { ActionIcon, Box, Input } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { ChangeEvent, useCallback, useState } from "react";
import { useAppState } from "../AppStateContext";

export const AppendId = () => {
  const { vid, setVid } = useAppState();

  const [id, setId] = useState("");
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newId = e.target.value;
    setId(newId);
  }, []);

  const handleSubmit = useCallback(() => {
    if (id.trim() === "") {
      return;
    }
    setId("");
    setVid && setVid(vid.concat([id]));
  }, [id, setVid, vid]);

  return (
    <Box>
      <Input
        w={"100%"}
        value={id}
        onChange={handleChange}
        rightSectionPointerEvents="all"
        rightSection={
          <ActionIcon
            variant="transparent"
            color="gray"
            aria-label="append video"
            onClick={handleSubmit}
          >
            <IconPlus />
          </ActionIcon>
        }
      />
    </Box>
  );
};
