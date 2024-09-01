import styles from './HoockBlockContentsWrapper.module.css';
import { HookBlockContentsWrapperProps } from './HookBlockContentsWrapperProps.interface';

const HookBlockContentsWrapper = ({
  title,
  description,
  children,
}: HookBlockContentsWrapperProps) => {
  return (
    <div className={styles['block-container']}>
      <div style={{ maxWidth: '60%' }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className={styles['hook-showcase']}>{children}</div>
    </div>
  );
};

export default HookBlockContentsWrapper;
