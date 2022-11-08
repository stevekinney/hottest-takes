import shuffle from 'lodash.shuffle';

export const fetchPosts = async ({
  limit = 10,
  offset = 0,
}: APIListParameters = {}): Promise<Post[]> => {
  const { default: posts } = await import('./posts.json');
  return shuffle(posts.slice(offset, limit));
};

export const fetchUsers = async ({
  limit = 10,
  offset = 0,
}: APIListParameters = {}): Promise<User[]> => {
  const { default: users } = await import('./users.json');
  return shuffle(users.slice(offset, limit));
};
