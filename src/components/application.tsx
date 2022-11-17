import AddPost from './add-post';
import Posts from './posts';
import Users from './users';

import posts from '../api/posts.json';
import users from '../api/users.json';

const Application = () => {
  // const posts: Post[] = [];
  // const users: User[] = [];

  return (
    <main className="w-full p-8 m-auto">
      <header className="p-4 mb-12 text-center ">
        <h1 className="mb-0 text-6xl underline decoration-primary-500">
          Neighborhood Hot Takes
        </h1>
      </header>
      <div className="flex flex-col w-full gap-8 sm:flex-row">
        <section className="w-full">
          <AddPost />
          <Posts posts={posts} />
        </section>
        <Users users={users} />
      </div>
    </main>
  );
};

export default Application;
