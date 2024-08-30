// import { useState } from 'react'
import styles from './App.module.css';
import HooksPage from './pages/HooksPage';
import { ThemeContext } from './context/theme.context';
import { useContext } from 'react';
// import cn from '';

function App() {
  const { theme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <>
      <h1 className={styles['heading']}>
        React hooks and other mechanisms interactive guide
      </h1>
      <div>
        <HooksPage />
      </div>
    </>
  );
}

export default App;
