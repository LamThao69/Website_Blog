import React from 'react'
import { Link } from 'react-router-dom'

export default function PostCard({post}){
  return (
    <article className="post">
  <h1 className="post__title"><Link to={`/posts/${post.id}`}>{post.title}</Link></h1>
      <div className="post__meta">{post.meta}</div>
      {post.image && <img className="post__cover" src={post.image} alt="cover" />}
      <p className="post__excerpt">{post.excerpt}</p>
      <div className="post__actions">
        <a className="btn btn--primary" href="#">Đọc toàn bộ bài viết</a>
        <a className="btn btn--ghost" href="#comments">Để lại bình luận</a>
      </div>
      <div className="divider" />
    </article>
  )
}
