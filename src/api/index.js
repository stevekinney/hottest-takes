import { createServer, Model, belongsTo, hasMany, Factory } from 'miragejs';
import {
  randFirstName,
  randLastName,
  randText,
  randUserName,
} from '@ngneat/falso';
import Serializer from './serializer';

const getRandomElement = (collection) => {
  return collection[Math.floor(Math.random() * collection.length)];
};

const ApplicationSerializer = Serializer.extend({
  embed: true,
  root: true,
});

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,

    serializers: {
      application: ApplicationSerializer,
    },

    factories: {
      user: Factory.extend({
        firstName: () => randFirstName({ withAccents: false }),
        lastName: () => randLastName({ withAccents: false }),
        commentIds: [],
        postIds: [],
        afterCreate(user) {
          const { firstName, lastName } = user;
          user.update({
            username: randUserName({ firstName, lastName }),
          });
        },
      }),
      post: Factory.extend({
        title: () => randText({ charCount: 40 }),
        body: () => randText({ charCount: 500 }),
        commentIds: [],
      }),
      comment: Factory.extend({
        text: () => randText({ charCount: 100 }),
      }),
    },

    models: {
      user: Model.extend({
        comments: hasMany(),
        posts: hasMany(),
      }),
      post: Model.extend({
        user: belongsTo(),
        comments: hasMany(),
      }),
      comment: Model.extend({
        post: belongsTo(),
        user: belongsTo(),
      }),
    },

    routes() {
      this.timing = 500;
      this.namespace = 'api';
      this.get('users');
      this.get('users/:id');
      this.get('posts');
      this.get('posts/:id');
      this.get('comments');
      this.get('comments/:id');
    },

    seeds(server) {
      const users = server.createList('user', 10);
      users.forEach((user) => {
        server.createList('post', 2, { user }).forEach((post) => {
          post.comments = server.createList('comment', 5, {
            post,
            user: getRandomElement(users),
          });
        });
      });
    },
  });
}
