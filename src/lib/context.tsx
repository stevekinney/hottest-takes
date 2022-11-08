import users from './users.json';
import posts from './posts.json';

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

const addPost =
  (dispatch: Dispatch<ApplicationActions>) => (title: string, body: string) => {
    dispatch({ type: 'AddPost', payload: { title, body, comments: [] } });
  };
const removePost = (dispatch: Dispatch<ApplicationActions>) => (id: string) => {
  dispatch({ type: 'RemovePost', payload: { id } });
};
const addUser =
  (dispatch: Dispatch<ApplicationActions>) =>
  (firstName: string, lastName: string, username: string) => {
    dispatch({ type: 'AddUser', payload: { firstName, lastName, username } });
  };
const removeUser = (dispatch: Dispatch<ApplicationActions>) => (id: string) => {
  dispatch({ type: 'RemoveUser', payload: { id } });
};
const addComment =
  (dispatch: Dispatch<ApplicationActions>) =>
  (postId: string, user: User, text: string) => {
    dispatch({ type: 'AddComment', payload: { text, user, postId } });
  };
const removeComment =
  (dispatch: Dispatch<ApplicationActions>) => (id: string, postId: string) => {
    dispatch({ type: 'RemoveComment', payload: { id, postId } });
  };

export const useDispatch = () => {
  const dispatch = useContext(ActionsContext);
  return useMemo(
    () => ({
      addPost: addPost(dispatch),
      removePost: removePost(dispatch),
      addUser: addUser(dispatch),
      removeUser: removeUser(dispatch),
      addComment: addComment(dispatch),
      removeComment: removeComment(dispatch),
    }),
    [dispatch],
  );
};

const reducer = (state: ApplicationState, action: ApplicationActions) =>
  produce(state, (state) => {
    if (action.type === 'AddPost') {
      state.posts.unshift({ ...action.payload, id: id() });
    }

    if (action.type === 'AddUser') {
      state.users.unshift({ ...action.payload, id: id() });
    }

    if (action.type === 'AddComment') {
      const { postId, ...comment } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      post?.comments.unshift({ ...comment, id: id() });
    }

    if (action.type === 'RemovePost') {
      const index = state.posts.findIndex(
        (posts) => posts.id === action.payload.id,
      );
      if (index !== -1) state.posts.splice(index, 1);
    }

    if (action.type === 'RemoveUser') {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id,
      );

      for (const post of state.posts) {
        post.comments = post.comments.filter((comment) => {
          return comment.user.id !== action.payload.id;
        });
      }

      if (index !== -1) state.users.splice(index, 1);
    }

    if (action.type === 'RemoveComment') {
      const { postId, id } = action.payload;
      const post = state.posts.find((post) => post.id === postId);

      if (!post) return state;

      const index = post?.comments.findIndex((comment) => comment.id === id);
      if (index !== -1) post?.comments?.splice(index, 1);
    }

    return state;
  });
