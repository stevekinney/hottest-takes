import { FormEventHandler, useId, useState } from 'react';
import users from '../lib/users.json';

type AddCommentProps = {
  onSubmit: FormEventHandler;
};

const AddComment = ({ onSubmit }: AddCommentProps) => {
  const id = useId();
  const [comment, setComment] = useState('');

  return (
    <div className="p-4 my-8 border-2 shadow-sm border-primary-600">
      <h4>Add Comment</h4>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <div className="flex items-center gap-2">
          <label htmlFor={`${id}-user`}>User</label>
          <select id={`${id}-user`}>
            {users.map((user) => (
              <option>
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

export default AddComment;
