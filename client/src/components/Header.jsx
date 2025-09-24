import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/"> <span className="orange">Good news</span><span className="blue"> of the day</span> </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><a href="#">Thể loại</a></li>
          <li><a href="#">Về blog này</a></li>
          <li><Link to="/login">Đăng Nhập</Link></li>
        </ul>
      </nav>
      <form className="search" action="/search" method="get">
        <input name="q" type="text" placeholder="Tìm kiếm..." aria-label="Tìm kiếm" />
        <button className="search-btn" type="submit">🔍</button>
      </form>
    </header>
  )
}
