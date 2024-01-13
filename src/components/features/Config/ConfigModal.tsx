import { Modal, ModalBody, Stack, Text } from "@mantine/core";
import { useAppState } from "../AppStateContext";
import { IdLine } from "./IdLine";
import { AppendId } from "./AppendId";

type Props = {
  opened: boolean;
  onClose: () => void;
};
export const ConfigModal = ({ opened, onClose }: Props) => {
  const { urls, setUrls } = useAppState();

  return (
    <>
      <Modal opened={opened} onClose={onClose} title="窓追加" centered>
        <ModalBody>
          <Text size="sm" c={"gray"} mb={4}>
            URLを入力してください。(例)https://www.youtube.com/watch?v=F1-vfcG8ubs
          </Text>
          <Stack gap={4}>
            {urls.map((videoId, index) => {
              const c = () => {
                const f = urls.slice(0, index - 1);
                const s = urls.slice(index + 1, urls.length);
                setUrls && setUrls(f.concat(s));
              };
              return <IdLine key={index} urls={videoId} onClose={c} />;
            })}
            <AppendId />
          </Stack>
        </ModalBody>
      </Modal>
    </>
  );
};
