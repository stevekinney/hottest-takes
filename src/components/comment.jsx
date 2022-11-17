import User from './user';
import { useActions } from '../hooks';

const PostComment = ({ comment, postId }) => {
  const { removeComment } = useActions();

  return (
    <article className="flex flex-col gap-2 p-2 pl-4 border-2 border-l-8 rounded-sm shadow-md border-primary-700">
      <User user={comment.user} />
      <p>{comment.text}</p>
      <div className="flex place-content-end">
        <button onClick={() => removeComment(postId, comment.id)}>
          ⛔️ Delete
        </button>
      </div>
    </article>
  );
};

export default PostComment;
