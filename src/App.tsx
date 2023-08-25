import { MantineProvider } from "@mantine/core";
// import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useGetContent } from "./useGetContent";
import Content from "./Content";
function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          theme={{ fontFamily: "Open Sans" }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Content />
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
