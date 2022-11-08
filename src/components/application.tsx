import { useContext } from 'react';
import { StateContext } from '../lib/context';
import Posts from './posts';
import Users from './users';

const Application = () => {
  const { posts, users } = useContext(StateContext);

  return (
    <main className="p-8 m-auto bg-white shadow-xl">
      <header className="p-4 mb-12 text-center ">
        <h1 className="mb-0 text-6xl">The Hottest of Takes</h1>
      </header>
      <div className="flex flex-col gap-8 lg:flex-row">
        <Posts posts={posts} />
        <Users users={users} />
      </div>
    </main>
  );
};

export default Application;
