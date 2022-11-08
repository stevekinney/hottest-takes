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

type Action<T extends string, P = never> = {
  type: T;
} & ([P] extends [never]
  ? {}
  : {
      payload: P;
    });

type WithoutId<T> = Omit<T, 'id'>;

type ApplicationState = {
  users: User[];
  posts: Post[];
};

type RemovePayload = {
  id: string;
};

type AddPostAction = Action<'AddPost', WithoutId<Post>>;
type RemovePostAction = Action<'RemovePost', RemovePayload>;
type AddUserAction = Action<'AddUser', WithoutId<User>>;
type RemoveUserAction = Action<'RemoveUser', RemovePayload>;
type AddCommentAction = Action<
  'AddComment',
  WithoutId<PostComment> & { postId: string }
>;
type RemoveCommentAction = Action<
  'RemoveComment',
  RemovePayload & { postId: string }
>;

type ApplicationActions =
  | AddPostAction
  | RemovePostAction
  | AddUserAction
  | RemoveUserAction
  | AddCommentAction
  | RemoveCommentAction;
