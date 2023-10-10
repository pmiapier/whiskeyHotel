import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout />
      ),
      children: [
        { path: '', element: <Home /> },
        { path: '/contact', element: <Contact /> },
      ]
    }
  ]);

export default function Route() {
    return <RouterProvider router={router} />;
  }