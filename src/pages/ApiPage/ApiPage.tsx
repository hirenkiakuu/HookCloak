import Heading from '../../components/Heading/Heading';
import TextContents from '../../components/TextContents/TextContents';
import PostsList from '../../components/PostsList/PostsList';
import styles from './ApiPage.module.css';

const title = 'API communication (json placeholder)';
const paragraph =
  'Данный раздел посвящен работе с API: пагинация, работа с формами..., axios, useReducer';

const ApiPage = () => {
  return (
    <>
      <Heading>Работа с API</Heading>
      <div className={styles['contents']}>
        <TextContents
          className={styles['text-contents--extra']}
          title={title}
          paragraph={paragraph}
        />
        <PostsList />
      </div>
    </>
  );
};

export default ApiPage;
