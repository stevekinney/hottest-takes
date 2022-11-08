import AddPost from './add-post';
import LoadPosts from './load-posts';
import Post from './post';

type PostsProps = { posts: Post[] };

const Posts = ({ posts }: PostsProps) => {
  return (
    <section>
      <LoadPosts onSubmit={() => {}} />
      <AddPost onSubmit={() => {}} />
      <section>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </section>
  );
};

export default Posts;
