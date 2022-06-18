import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:4000/posts', {
        title,
      });

      setTitle('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
