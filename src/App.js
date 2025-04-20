import React, { useEffect, useState } from 'react';
import RedditCard from './RedditCard';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data.children);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container" style={{ maxWidth: '1280px', minHeight: '720px' }}>
      {/* 👇 Customize or remove this header if needed */}
      <h1 className="text-center my-4">Reddit reactjs Feed</h1>

      <div className="row">
        {posts.map((post, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <RedditCard data={post.data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
