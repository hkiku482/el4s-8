import { ActionIcon, Box, Input } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { ChangeEvent, useCallback, useState } from "react";
import { useAppState } from "../AppStateContext";

export const AppendId = () => {
  const { urls, setUrls } = useAppState();

  const [id, setId] = useState("");
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newId = e.target.value;
    setId(newId);
  }, []);

  const handleSubmit = useCallback(() => {
    if (id.trim() === "") {
      return;
    }
    if (id.indexOf("watch?v=") === -1) {
      return;
    }
    setId("");
    setUrls && setUrls(urls.concat([id]));
  }, [id, setUrls, urls]);

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
