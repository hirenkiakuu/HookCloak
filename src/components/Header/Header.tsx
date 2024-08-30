import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles['header-container']}>
      <nav>
        <ul className={styles['header-nav-list']}>
          <NavLink to="/">Хуки</NavLink>
          <NavLink to="/">Тестирование</NavLink>
          <NavLink to="/">Работа с API</NavLink>
          <NavLink to="/">Redux</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
