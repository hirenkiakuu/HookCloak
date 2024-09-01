import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { ModalButton } from '../components/Modal/Modal';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className={styles['content']}>
        <Outlet />
      </div>
      <ModalButton />
    </>
  );
};

export default MainLayout;
