import AddComment from './add-comment';
import PostComment from './comment';
import { useActions } from '../hooks';

const Post = ({ post }) => {
  const { removePost } = useActions();

  return (
    <article className="flex flex-col w-full gap-4 p-4 mb-20 border-2 border-opacity-50 shadow-sm border-primary-800">
      <header className="flex flex-col items-center place-content-between xl:flex-row">
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

export default Post;
