import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const linkStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      backgroundColor: isActive ? 'rgb(147, 147, 250)' : 'inherit',
    };
  };

  return (
    <header className={styles['header-container']}>
      <nav>
        <ul className={styles['nav-list']}>
          <NavLink
            style={linkStyle}
            className={styles['nav-list__item']}
            to="/HookCloak/hooks"
          >
            Хуки
          </NavLink>
          <NavLink
            style={linkStyle}
            className={styles['nav-list__item']}
            to="/HookCloak/tests"
          >
            Тестирование
          </NavLink>
          <NavLink
            style={linkStyle}
            className={styles['nav-list__item']}
            to="/HookCloak/work-with-api"
          >
            Работа с API
          </NavLink>
          <NavLink
            style={linkStyle}
            className={styles['nav-list__item']}
            to="/HookCloak/redux"
          >
            Redux
          </NavLink>
        </ul>
      </nav>
      <div className={styles['header__logo']}>
        <b>HookCloak</b>
        <i className="bx bxl-react" style={{ marginTop: '4px' }}></i>
      </div>
    </header>
  );
};

export default Header;
