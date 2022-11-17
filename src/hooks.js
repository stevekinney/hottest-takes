import { useContext } from 'react';
import { ActionsContext, PostsContext, UsersContext } from './context';

export const useActions = () => {
  return useContext(ActionsContext);
};

export const useUsers = () => {
  const users = useContext(UsersContext);
  return users;
};

export const usePosts = () => {
  const posts = useContext(PostsContext);
  return posts;
};
