import { useEffect, useState } from 'react';
import { fetchPosts, fetchUsers } from '../lib/fetch';
import Posts from './posts';
import Users from './users';

const Application = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
    fetchUsers().then(setUsers);
  }, []);

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
