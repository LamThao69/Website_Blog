import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import PostList from '../components/PostList'

export default function Home(){
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let mounted = true
    fetch('/posts')
      .then(r => r.json())
      .then(data => { if (mounted) setPosts(data) })
      .catch(()=>{} )
      .finally(()=> setLoading(false))
    return ()=> mounted = false
  },[])

  return (
    <div>
      <Header />
      <main className="wrap">
        {loading ? <p>Loading...</p> : <PostList posts={posts} />}
      </main>
    </div>
  )
}
