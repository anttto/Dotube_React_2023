import './App.css';
import Search from './components/Search';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <header id="header">
        <Search/>
      </header>
      <div id="container">
        <QueryClientProvider client={queryClient}>
          <Outlet/>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
