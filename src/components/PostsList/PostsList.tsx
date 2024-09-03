import { useEffect, useMemo, useState } from 'react';
import Paginator from '../Paginator/Paginator/Paginator';
import axios from 'axios';
import styles from './PostsList.module.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

const POSTS_PER_PAGE = 20;

const PostCard = ({ post }: PostCardProps) => {
  return (
    <li>
      <div className={styles['post-card-container']}>
        <h1>
          {post.title} {post.id}
        </h1>
        <p>{post.body}</p>
      </div>
    </li>
  );
};

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get<Post[]>(
          'https://jsonplaceholder.typicode.com/posts',
        );

        if (data) {
          setAllPosts(data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;

    console.log(startIndex, endIndex);

    setPosts(allPosts.slice(startIndex, endIndex));
  }, [currentPage, allPosts]);

  const switchCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pagesCount = useMemo(() => {
    return Math.ceil(allPosts.length / POSTS_PER_PAGE);
  }, [allPosts.length]);

  return (
    <>
      <ul className={styles['posts-list']}>
        {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
      </ul>
      <Paginator
        pagesCount={pagesCount}
        onPaginatorButtonClick={switchCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default PostsList;
