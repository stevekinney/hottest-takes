import { memo } from 'react';
import { useActions } from '../lib/context';
import AddUser from './add-user';
import User from './user';

type UsersProps = {
  users: User[];
};

const Users = ({ users }: UsersProps) => {
  const { removeUser } = useActions();

  return (
    <section className="flex flex-col gap-4">
      <AddUser />
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          className="border-2 border-primary-600 p-2 text-sm shadow-sm"
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
