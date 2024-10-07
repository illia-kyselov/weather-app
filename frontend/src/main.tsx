import { createRoot } from 'react-dom/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './assets/styles/App.css';

const router = createRouter({ routeTree });

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
