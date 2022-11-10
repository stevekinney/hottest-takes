import { FormEventHandler, useState } from 'react';

type LoadPostsProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const LoadPosts = ({ onSubmit }: LoadPostsProps) => {
  const [numberOfArticles, setNumberOfArticles] = useState(5);
  const loadPosts = (...args: any[]) => {};

  return (
    <form
      className="mb-8"
      onSubmit={(e) => {
        e.preventDefault();
        loadPosts(numberOfArticles);
        onSubmit(e);
      }}
    >
      <label htmlFor="number-of-articles">Load Articles</label>
      <div className="flex">
        <input
          type="number"
          id="number-of-articles"
          className="w-full"
          placeholder="Number of Articles"
          value={numberOfArticles}
          onChange={(e) => setNumberOfArticles(+e.target.value)}
        />
        <button type="submit" className="border-l-0 whitespace-nowrap">
          Load Posts
        </button>
      </div>
    </form>
  );
};

export default LoadPosts;
