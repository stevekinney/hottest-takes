import { memo } from 'react';
import AddPost from './add-post';
import Post from './post';

type PostsProps = { posts: Post[] };

const Posts = ({ posts }: PostsProps) => {
  return (
    <section>
      <AddPost />
      <section>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </section>
  );
};

export default memo(Posts);
