import { randUuid } from '@ngneat/falso';
import { createAction } from '@reduxjs/toolkit';
import { produce } from 'immer';

export const userActions = {
  addUser: createAction('users/add', (user: Omit<User, 'id'>) => ({
    payload: user,
  })),
  removeUser: createAction('users/remove', (userId: User['id']) => ({
    payload: { id: userId },
  })),
} as const;

export type UserActions = ReturnType<
  typeof userActions[keyof typeof userActions]
>;

export const usersReducer = (state: User[], action: UserActions) =>
  produce(state, (users) => {
    if (action.type === 'users/add') {
      const user: User = { ...action.payload, id: randUuid() };
      users.unshift(user);
      return;
    }

    if (action.type === 'users/remove') {
      const index = users.findIndex((user) => user.id === action.payload.id);
      users.splice(index, 1);
      return;
    }
  });
