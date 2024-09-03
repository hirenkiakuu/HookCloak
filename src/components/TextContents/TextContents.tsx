import cn from 'classnames';
import styles from './TextContents.module.css';

const TextContents = ({
  title,
  paragraph,
  className,
}: {
  title: string;
  paragraph: string;
  className?: string;
}) => {
  return (
    <>
      <div className={cn(styles['text-contents-container'], className)}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </>
  );
};

export default TextContents;
