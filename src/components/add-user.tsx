import { FormEventHandler, useState } from 'react';

type AddUserProps = {
  onSubmit: FormEventHandler;
};

const AddUser = ({ onSubmit }: AddUserProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <div>
        <label htmlFor="add-user-first-name" className="block">
          First Name
        </label>
        <input
          id="add-user-first-name"
          className="w-full"
          required
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="add-user-last-name" className="block">
          Last Name
        </label>
        <input
          id="add-user-last-name"
          className="w-full"
          required
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="add-user-username" className="block">
          User Name
        </label>
        <input
          id="add-user-username"
          className="w-full"
          required
          value={userName}
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
