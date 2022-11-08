import { memo } from 'react';
import { useActions } from '../lib/context';
import AddComment from './add-comment';
import PostComment from './comment';

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
  const { removePost } = useActions();
  return (
    <article className="mb-20 flex flex-col gap-4 border-2 border-primary-800 border-opacity-50 p-4 shadow-sm">
      <header className="flex flex-col place-content-between items-center xl:flex-row">
        <h2>{post.title}</h2>
        <button
          className="w-full whitespace-nowrap xl:w-fit"
          onClick={() => removePost(post.id)}
        >
          Remove Post
        </button>
      </header>
      <p>{post.body}</p>
      <section>
        <h3>Comments</h3>
        <div className="flex flex-col gap-4">
          {post.comments.map((comment) => (
            <PostComment key={comment.id} comment={comment} postId={post.id} />
          ))}
        </div>
        <AddComment postId={post.id} />
      </section>
    </article>
  );
};

export default memo(Post);
