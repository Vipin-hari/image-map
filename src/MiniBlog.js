import React from 'react';
import './MiniBlog.css';

function MiniBlog({ blogs }) {
  return (
    <div className="mini-blog-container">
      {blogs.map((blog, index) => (
        <div key={index} className={`mini-blog ${index % 2 === 0 ? 'image-left' : 'content-left'}`}>
          <div className="mini-blog-content">
            <h2>{blog.title}</h2>
            <p>{blog.text}</p>
          </div>
          <div className="mini-blog-image">
            <img src={blog.imageUrl} alt={blog.title} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MiniBlog;
