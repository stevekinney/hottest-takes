type APIListParameters = {
  limit?: number;
  offset?: number;
};

type Post = {
  id: string;
  title: string;
  body: string;
  comments: PostComment[];
};

type PostComment = {
  id: string;
  text: string;
  user: User;
};

type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
};

type Address = {
  street: string;
  city: string;
  zipCode: string;
  county: string;
  country: string;
};

type Action<T extends string, P = never> = {
  type: T;
} & ([P] extends [never]
  ? {}
  : {
      payload: P;
    });
