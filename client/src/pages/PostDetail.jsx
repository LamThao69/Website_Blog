import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

export default function PostDetail(){
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch(`/posts/${id}`)
      .then(r => r.json())
      .then(data => setPost(data))
      .catch(()=>{})
      .finally(()=>setLoading(false))
  },[id])

  if (loading) return <div><Header/><main className="wrap"><p>Loading...</p></main></div>
  if (!post) return <div><Header/><main className="wrap"><p>Không tìm thấy bài viết</p></main></div>

  return (
    <div>
      <Header />
      <main className="wrap">
        <article className="post">
          <h1 className="post__title">{post.title}</h1>
          <div className="post__meta">{post.meta}</div>
          {post.image && <img className="post__cover" src={post.image} alt="cover" />}
          <div dangerouslySetInnerHTML={{__html: post.content || post.excerpt}} />
        </article>
      </main>
    </div>
  )
}
