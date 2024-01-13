import { Modal, ModalBody, Stack, Text } from "@mantine/core";
import { useAppState } from "../AppStateContext";
import { IdLine } from "./IdLine";
import { AppendId } from "./AppendId";

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
          <Text size="sm" c={"gray"} mb={4}>
            video idを入力してください。
            "https://www.youtube.com/watch?v=F1-vfcG8ubs"の場合"F1-vfcG8ubs"の部分です。
          </Text>
          <Stack gap={4}>
            {vid.map((videoId, index) => {
              const c = () => {
                const f = vid.slice(0, index - 1);
                const s = vid.slice(index + 1, vid.length);
                setVid && setVid(f.concat(s));
              };
              return <IdLine key={index} vid={videoId} onClose={c} />;
            })}
            <AppendId />
          </Stack>
        </ModalBody>
      </Modal>
    </>
  );
};
