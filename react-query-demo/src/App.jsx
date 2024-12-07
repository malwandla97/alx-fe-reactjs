import React from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import PostComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>React Query Demo</h1>
      <PostComponent />
    </QueryClientProvider>
  );
};
export default App;