import { memo } from 'react';
import { useDispatch } from '../lib/context';
import User from './user';

type CommentProps = {
  comment: PostComment;
  postId: string;
};

const PostComment = ({ comment, postId }: CommentProps) => {
  const { removeComment } = useDispatch();

  return (
    <article className="flex flex-col gap-2 p-2 pl-4 border-2 border-l-8 rounded-sm shadow-md border-primary-700">
      <User user={comment.user} />
      <p>{comment.text}</p>
      <div className="flex place-content-end">
        <button onClick={() => removeComment(comment.id, postId)}>
          ⛔️ Delete
        </button>
      </div>
    </article>
  );
};

export default memo(PostComment);
