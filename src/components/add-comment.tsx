import { memo, useContext, useId, useState } from 'react';
import { StateContext, useDispatch } from '../lib/context';

type AddCommentProps = {
  postId: string;
};

const AddComment = ({ postId }: AddCommentProps) => {
  const id = useId();
  const { users } = useContext(StateContext);
  const { addComment } = useDispatch();
  const [comment, setComment] = useState('');
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <div className="p-4 my-8 border-2 shadow-sm border-primary-600">
      <h4>Add Comment</h4>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, selectedUser, comment);
        }}
      >
        <div className="flex items-center gap-2">
          <label htmlFor={`${id}-user`}>User</label>
          <select
            id={`${id}-user`}
            value={selectedUser.id}
            onChange={(e) => {
              console.log(e.target.value);
              const user = users.find((u) => u.id === e.target.value);
              setSelectedUser(user || users[0]);
            }}
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.firstName} {user.lastName}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col sm:flex-row">
          <label htmlFor={`${id}-add-comment`} className="sm:hidden">
            Comment
          </label>
          <input
            id={`${id}-add-comment`}
            className="w-full"
            required
            value={comment}
            placeholder="Add comment…"
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className="whitespace-nowrap">
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(AddComment);
