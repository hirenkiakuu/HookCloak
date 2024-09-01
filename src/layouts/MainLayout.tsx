import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { ModalButton } from '../components/Modal/Modal';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ModalButton />
    </>
  );
};

export default MainLayout;
