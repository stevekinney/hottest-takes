import { memo } from 'react';
import { useActions } from '../lib/context';
import User from './user';

type CommentProps = {
  comment: PostComment;
  postId: string;
};

const PostComment = ({ comment, postId }: CommentProps) => {
  const { removeComment } = useActions();

  return (
    <article className="flex flex-col gap-2 rounded-sm border-2 border-l-8 border-primary-700 p-2 pl-4 shadow-md">
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
