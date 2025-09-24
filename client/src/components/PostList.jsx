import React from 'react'
import PostCard from './PostCard'

export default function PostList({posts}){
  return (
    <div>
      {posts.map((p, i) => <PostCard key={i} post={p} />)}
    </div>
  )
}
