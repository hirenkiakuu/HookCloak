import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles['header-container']}>
      <nav>
        <ul className={styles['nav-list']}>
          <NavLink className={styles['nav-list__item']} to="/hooks">
            Хуки
          </NavLink>
          <NavLink className={styles['nav-list__item']} to="/tests">
            Тестирование
          </NavLink>
          <NavLink className={styles['nav-list__item']} to="/work-with-api">
            Работа с API
          </NavLink>
          <NavLink className={styles['nav-list__item']} to="/redux">
            Redux
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
