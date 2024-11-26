import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Blog from './Blog';
import './Blogs.css'

export default function Blogs() {

    let {loading,posts} = useContext(AppContext);

  return (
    <div className='blogs'>
        {
            loading ? <Spinner></Spinner> : posts.posts.map((post,index)=><Blog key={index} post={post}></Blog>)
        }
    </div>
  )
}
