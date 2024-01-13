import { ActionIcon, AppShell, Box, Text, Group } from "@mantine/core";
import YouTube from "react-youtube";
import { IconSettings } from "@tabler/icons-react";
import { ConfigModal } from "./components/features/Config";
import { useMemo } from "react";
import { useAppState } from "./components/features/AppStateContext";
import { useDisclosure } from "@mantine/hooks";

function App() {
  // const { ref, width, height } = useElementSize();

  const [opened, { close, open }] = useDisclosure();
  const { urls } = useAppState();

  const gridTemplateColumns = useMemo(() => {
    if (urls.length < 2) return "1fr";
    if (urls.length < 5) return "1fr 1fr";
    if (urls.length < 10) return "1fr 1fr 1fr";
    return "1fr 1fr 1fr 1fr";
  }, [urls]);

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Box p="sm">
          <Group>
            <ActionIcon onClick={open}>
              <IconSettings />
            </ActionIcon>
            <Text size="sm">YouTube N窓ツール</Text>
          </Group>
        </Box>
      </AppShell.Header>
      <AppShell.Main>
        <Box
          h="calc(100vh - var(--app-shell-header-height, 0px) - var(--app-shell-footer-height, 0px))"
          style={{ display: "grid", gridTemplateColumns: gridTemplateColumns }}
        >
          {urls.map((data) => {
            const vid = data.url.split("watch?v=")[1].split("&s=")[0];
            return (
              <YouTube
                key={data.id}
                videoId={vid}
                opts={{
                  playsinline: 1,
                  autoplay: 0,
                  mute: 1,
                  loop: 1,
                  width: `100%`,
                  height: `100%`,
                }}
                style={{ height: "100%" }}
              />
            );
          })}
        </Box>
      </AppShell.Main>
      <ConfigModal opened={opened} onClose={close} />
    </AppShell>
  );
}

export default App;
