import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Blog from './Blog';

export default function Blogs() {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="w-full max-w-3xl max-h-[530px] overflow-y-scroll flex flex-col items-center gap-6 px-4 py-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {
        loading
          ? <Spinner />
          : posts.posts.map((post, index) => <Blog key={index} post={post} />)
      }
    </div>
  );
}