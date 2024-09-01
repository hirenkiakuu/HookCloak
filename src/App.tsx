// import { useState } from 'react'
// import styles from './App.module.css';
import HooksPage from './pages/HooksPage';
import ErrorPage from './pages/Error/ErrorPage';
import { ThemeContext } from './context/theme.context';
import { useContext } from 'react';
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import cn from '';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/hooks',
        element: <HooksPage />,
      },
      {
        path: '/tests',
        element: <ErrorPage />,
      },
      {
        path: '/work-with-api',
        element: <ErrorPage />,
      },
      {
        path: '/redux',
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
      {/* <h1 className={styles['heading']}>
        React hooks and other mechanisms interactive guide
      </h1>
      <div>
        <HooksPage />
      </div> */}
    </>
  );
}

export default App;
