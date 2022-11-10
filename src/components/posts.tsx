import { memo } from 'react';
import Post from './post';

type PostsProps = { posts: Post[] };

const Posts = ({ posts }: PostsProps) => {
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

export default memo(Posts);
