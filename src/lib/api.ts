export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('/api/users');
  return await res.json();
};

export const fetchPosts = async (): Promise<User[]> => {
  const res = await fetch('/api/posts');
  return await res.json();
};
