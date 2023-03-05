import './App.css';
import Search from './components/Search';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from './context/YoutubeApiContext';


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Search/>
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet/>
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
