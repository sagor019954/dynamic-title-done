
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
