import './App.css';
import Search from './components/Search';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Search/>
      <QueryClientProvider client={queryClient}>
        <Outlet/>
      </QueryClientProvider>
    </>
  );
}

export default App;
