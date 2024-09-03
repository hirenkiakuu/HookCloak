import cn from 'classnames';
import styles from './Paginator.module.css';

type PaginatorCommonProps = {
  currentPage: number;
  onPaginatorButtonClick: (pageNumber: number) => void;
};

interface PaginatorProps extends PaginatorCommonProps {
  pagesCount: number;
}

interface PaginatorButtonProps extends PaginatorCommonProps {
  pageNumber: number;
}

const PaginatorButton = ({
  pageNumber,
  currentPage,
  onPaginatorButtonClick,
}: PaginatorButtonProps) => {
  return (
    <button
      onClick={() => onPaginatorButtonClick(pageNumber)}
      className={cn(styles['paginator-button'], {
        [styles['active']]: pageNumber === currentPage,
      })}
    >
      {pageNumber}
    </button>
  );
};

const Paginator = ({
  pagesCount,
  currentPage,
  onPaginatorButtonClick,
}: PaginatorProps) => {
  const pagesArr = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <ul className={styles['paginator']}>
      {pagesArr.map((pageNumber) => (
        <li key={pageNumber}>
          <PaginatorButton
            currentPage={currentPage}
            onPaginatorButtonClick={onPaginatorButtonClick}
            pageNumber={pageNumber}
          />
        </li>
      ))}
    </ul>
  );
};

export default Paginator;
