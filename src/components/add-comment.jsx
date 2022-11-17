import { useId, useState } from 'react';
import users from '../api/users.json';
import { useActions } from '../hooks';

const AddComment = ({ postId }) => {
  const id = useId();
  const [comment, setComment] = useState('');
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const { addComment } = useActions();

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

export default AddComment;
