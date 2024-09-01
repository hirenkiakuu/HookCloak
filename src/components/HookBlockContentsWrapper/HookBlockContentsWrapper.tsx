import styles from './HoockBlockContentsWrapper.module.css';
import { HookBlockContentsWrapperProps } from './HookBlockContentsWrapperProps.interface';

const HookBlockContentsWrapper = ({
  title,
  description,
  children,
  externalLink,
}: HookBlockContentsWrapperProps) => {
  return (
    <div className={styles['block-container']}>
      <div className={styles['block-description']} style={{ maxWidth: '60%' }}>
        <a
          className={styles['external-link']}
          target="_blank"
          href={externalLink}
        >
          {title}
        </a>
        <p>{description}</p>
      </div>
    
      <div className={styles['hook-showcase']}>{children}</div>
    </div>
  );
};

export default HookBlockContentsWrapper;
