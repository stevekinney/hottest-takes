import { FormEventHandler, useState } from 'react';

type AddPostProps = {
  onSubmit: FormEventHandler;
};

const AddPost = ({ onSubmit }: AddPostProps) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <div className="p-4 my-8 border-2 shadow-sm border-primary-600">
      <h4>Write Post</h4>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <div className="flex flex-col sm:flex-row">
          <label htmlFor="new-post-title" className="sm:hidden">
            Title
          </label>
          <input
            id="new-post-title"
            className="w-full"
            required
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <label htmlFor="new-post-body" className="sm:hidden">
            Body
          </label>
          <textarea
            id="new-post-body"
            className="w-full"
            required
            value={body}
            placeholder="Content"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit" className="whitespace-nowrap">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
