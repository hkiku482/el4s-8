import { ActionIcon, Box, Input } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import { IconPlus } from "@tabler/icons-react";
import { ChangeEvent, useCallback, useState } from "react";
import { useAppState } from "../AppStateContext";

export const AppendId = () => {
  const { urls, setUrls } = useAppState();

  const [url, setId] = useState("");
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newId = e.target.value;
    setId(newId);
  }, []);

  const handleSubmit = useCallback(() => {
    if (16 <= urls.length) {
      return;
    }
    if (url.trim() === "") {
      return;
    }
    if (url.indexOf("watch?v=") === -1) {
      return;
    }
    setId("");
    const id = uuidv4();
    setUrls && setUrls(urls.concat([{ id, url }]));
  }, [url, setUrls, urls]);

  return (
    <Box>
      <Input
        w={"100%"}
        value={url}
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
