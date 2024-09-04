import { useState } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles['modal-overlay']} onClick={onClose}>
      <div className={styles['modal']} onClick={(e) => e.stopPropagation()}>
        <div>Добро пожаловать!</div>
        <div>
          Данное приложение призвано складировать различные функциональные
          возможности библиотеки React, а также некоторые практики.
        </div>
        <div>
          На сайте использованы следующие технологии:
          <ul className={styles['technologies-list']}>
            <li>
              Графический интерфейс:
              <ul>
                <li>React</li>
                <li>Стилизация - css modules</li>
                <li>typescript</li>
              </ul>
            </li>
            <li>
              Работа с API:
              <ul>
                <li>Redux toolkit - RTK Query</li>
                <li>Axios</li>
              </ul>
            </li>
            <li>
              Тестирование:
              <ul>
                <li>JEST</li>
                <li>Playwright</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const ModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles['modal-btn']} onClick={openModal}>
        ?
      </div>
      {isModalOpen &&
        createPortal(<Modal onClose={closeModal} />, document.body)}
    </>
  );
};

export default Modal;
