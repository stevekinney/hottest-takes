import { randUuid } from '@ngneat/falso';
import { createAction } from '@reduxjs/toolkit';
import { produce } from 'immer';

export const postActions = {
  addPost: createAction('posts/add', (post: Pick<Post, 'title' | 'body'>) => ({
    payload: post,
  })),
  removePost: createAction('posts/remove', (postId: Post['id']) => ({
    payload: { id: postId },
  })),
  addComment: createAction(
    'posts/comments/add',
    (postId: Post['id'], user: User, text: string) => ({
      payload: { postId, comment: { text }, user },
    }),
  ),
  removeComment: createAction(
    'posts/comments/remove',
    (postId: Post['id'], commentId: PostComment['id']) => ({
      payload: { postId, commentId },
    }),
  ),
} as const;

export type PostActions = ReturnType<
  typeof postActions[keyof typeof postActions]
>;

export const postsReducer = (state: Post[], action: PostActions) =>
  produce(state, (posts) => {
    if (action.type === 'posts/add') {
      const post: Post = { ...action.payload, id: randUuid(), comments: [] };
      posts.unshift(post);
      return;
    }

    if (action.type === 'posts/remove') {
      const index = posts.findIndex((post) => post.id === action.payload.id);
      posts.splice(index, 1);
      return;
    }

    if (action.type === 'posts/comments/add') {
      const post = posts.find((post) => post.id === action.payload.postId);
      if (post) {
        post.comments.unshift({
          id: randUuid(),
          text: action.payload.comment.text,
          user: action.payload.user,
        });
      }
    }

    if (action.type === 'posts/comments/remove') {
      const post = posts.find((post) => post.id === action.payload.postId);
      if (post) {
        const index = post.comments.findIndex(
          (comment) => comment.id === action.payload.commentId,
        );
        post.comments.splice(index, 1);
      }
    }
  });
