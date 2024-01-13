import { Modal, ModalBody, Stack } from "@mantine/core";
import { useAppState } from "../AppStateContext";
import { IdLine } from "./IdLine";
import { AppendId } from "./AppendId";
import { useCallback } from "react";

type Props = {
  opened: boolean;
  onClose: () => void;
};
export const ConfigModal = ({ opened, onClose }: Props) => {
  const { vid, setVid } = useAppState();

  return (
    <>
      <Modal opened={opened} onClose={onClose} title="窓追加" centered>
        <ModalBody>
          <Stack gap={4}>
            {vid.map((videoId, index) => {
              const c = useCallback(() => {
                const f = vid.slice(0, index - 1);
                const s = vid.slice(index + 1, vid.length);
                setVid && setVid(f.concat(s));
              }, [setVid]);
              return <IdLine key={index} vid={videoId} onClose={c} />;
            })}
            <AppendId />
          </Stack>
        </ModalBody>
      </Modal>
    </>
  );
};
