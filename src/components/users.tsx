import { memo } from 'react';
import { useDispatch } from '../lib/context';
import AddUser from './add-user';
import User from './user';

type UsersProps = {
  users: User[];
};

const Users = ({ users }: UsersProps) => {
  const { removeUser } = useDispatch();

  return (
    <section className="flex flex-col gap-4">
      <AddUser />
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          className="p-2 text-sm border-2 shadow-sm border-primary-600"
        >
          <button
            className="px-1 py-0 font-normal"
            onClick={() => removeUser(user.id)}
          >
            Remove
          </button>
        </User>
      ))}
    </section>
  );
};

export default memo(Users);
