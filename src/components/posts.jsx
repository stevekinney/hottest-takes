import { usePosts } from '../hooks';
import Post from './post';

const Posts = () => {
  const posts = usePosts();

  if (!posts.length)
    return (
      <section className="w-full italic text-center text-primary-900">
        No one has posted a hot take yet.
      </section>
    );

  return (
    <section className="w-full">
      <section>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </section>
  );
};

export default Posts;
