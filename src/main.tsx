import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './routes/root.tsx';
import Navigation from './components/Navigation.tsx';

// TODO: Add other routes, pull out router into its own file
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navigation isMobile/>
    <RouterProvider router={router} />
  </StrictMode>,
)
