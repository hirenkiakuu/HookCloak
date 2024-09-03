import HooksPage from './pages/HooksPage';
import ApiPage from './pages/ApiPage/ApiPage';
import ErrorPage from './pages/Error/ErrorPage';
import { ThemeContext } from './context/theme.context';
import { useContext } from 'react';
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/HookCloak/',
    element: <MainLayout />,
    children: [
      {
        path: '/HookCloak/hooks',
        element: <HooksPage />,
      },
      {
        path: '/HookCloak/tests',
        element: <ErrorPage />,
      },
      {
        path: '/HookCloak/work-with-api',
        element: <ApiPage />,
      },
      {
        path: '/HookCloak/redux',
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  const { theme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
