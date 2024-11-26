import React from 'react'
import './Blog.css'

export default function Blog({post}) {
  return (
    <div className='blog'>
        <div className='blogtitle'>
            {
                post.title
            }
        </div>
        <div>
            by <i>{post.author}</i> on <u>{post.category}</u>
        </div>
        <div className='content'> 
            {
                post.content
            }
        </div>
        <div className='tag'>
            {
                post.tags.map(tag => `#${tag} `)
            }
        </div>
    </div>
  )
}
