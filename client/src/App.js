import React from 'react';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

const App = () => {
  return (
    <div className='container'>
      <h1>Create Post</h1>
      {/* Render the component for creating posts */}
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      {/* Render the component for listing posts */}
      <PostList />
    </div>
  );
};

export default App;
