import { v4 as id } from 'uuid';
import { produce } from 'immer';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer,
} from 'react';

import users from './users.json';
import posts from './posts.json';

const initialState: ApplicationState = {
  posts,
  users,
};

export const StateContext = createContext(initialState);
const ActionsContext = createContext(
  undefined as unknown as Dispatch<ApplicationActions>,
);

export const Provider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ActionsContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </ActionsContext.Provider>
  );
};

export const useActions = () => {
  const dispatch = useContext(ActionsContext);
  return useMemo(
    () => ({
      addPost: (title: string, body: string) => {
        dispatch({ type: 'AddPost', payload: { title, body, comments: [] } });
      },
      removePost: (id: string) => {
        dispatch({ type: 'RemovePost', payload: { id } });
      },
      addUser: (firstName: string, lastName: string, username: string) => {
        dispatch({
          type: 'AddUser',
          payload: { firstName, lastName, username },
        });
      },
      removeUser: (id: string) => {
        dispatch({ type: 'RemoveUser', payload: { id } });
      },
      addComment: (postId: string, user: User, text: string) => {
        dispatch({ type: 'AddComment', payload: { text, user, postId } });
      },
      removeComment: (id: string, postId: string) => {
        dispatch({ type: 'RemoveComment', payload: { id, postId } });
      },
    }),
    [dispatch],
  );
};

const reducer = (state: ApplicationState, action: ApplicationActions) =>
  produce(state, ({ posts, users }) => {
    if (action.type === 'AddPost') {
      posts.unshift({ ...action.payload, id: id() });
    }

    if (action.type === 'AddUser') {
      users.unshift({ ...action.payload, id: id() });
    }

    if (action.type === 'AddComment') {
      const { postId, ...comment } = action.payload;
      const post = posts.find((post) => post.id === postId);
      post?.comments.unshift({ ...comment, id: id() });
    }

    if (action.type === 'RemovePost') {
      const index = posts.findIndex((posts) => posts.id === action.payload.id);
      if (index !== -1) posts.splice(index, 1);
    }

    if (action.type === 'RemoveUser') {
      for (const post of posts) {
        post.comments = post.comments.filter((comment) => {
          return comment.user.id !== action.payload.id;
        });
      }

      const index = users.findIndex((user) => user.id === action.payload.id);

      if (index !== -1) users.splice(index, 1);
    }

    if (action.type === 'RemoveComment') {
      const { postId, id } = action.payload;
      const post = posts.find((post) => post.id === postId);

      if (!post) return state;

      const index = post?.comments.findIndex((comment) => comment.id === id);
      if (index !== -1) post?.comments?.splice(index, 1);
    }
  });
