import { useContext } from 'react';
import { ActionsContext, StateContext } from './context';

export const useActions = () => {
  return useContext(ActionsContext);
};

export const useUsers = () => {
  const { users } = useContext(StateContext);
  return users;
};

export const usePosts = () => {
  const { posts } = useContext(StateContext);
  return posts;
};
