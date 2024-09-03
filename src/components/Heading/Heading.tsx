import styles from './Heading.module.css';
import { ReactNode } from 'react';

const Heading = ({ children }: { children: ReactNode }) => {
  return <h1 className={styles['heading']}>{children}</h1>;
};

export default Heading;
