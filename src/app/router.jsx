import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.jsx';
import { SchemaPage } from './routes/schema/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <SchemaPage />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
