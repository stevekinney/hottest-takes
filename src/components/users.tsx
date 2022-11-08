import AddUser from './add-user';
import User from './user';

type UsersProps = {
  users: User[];
};

const Users = ({ users }: UsersProps) => {
  return (
    <section className="flex flex-col gap-4">
      <AddUser onSubmit={() => {}} />
      {users.map((user) => (
        <User
          user={user}
          className="p-2 text-sm border-2 shadow-sm border-primary-600"
        >
          <button className="px-1 py-0 font-normal">Remove</button>
        </User>
      ))}
    </section>
  );
};

export default Users;
