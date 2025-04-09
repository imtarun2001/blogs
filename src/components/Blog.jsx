import React from 'react';

export default function Blog({ post }) {
  return (
    <div className="text-left p-4 border-b border-gray-300">
      <h2 className="font-extrabold text-xl text-indigo-800 font-[Montserrat] mb-1">
        {post.title}
      </h2>
      <p className="text-sm text-gray-600 mb-2">
        by <i className="font-semibold">{post.author}</i> on <u className="font-semibold">{post.category}</u>
      </p>
      <p className="font-medium font-[sans-serif] text-gray-800 mb-2">
        {post.content}
      </p>
      <div className="flex flex-wrap gap-2 text-blue-600 font-bold">
        {
          post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="hover:text-blue-800 cursor-pointer"
            >
              #{tag}
            </span>
          ))
        }
      </div>
    </div>
  );
}