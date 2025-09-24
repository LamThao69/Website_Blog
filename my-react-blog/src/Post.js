export default function Post({ title, meta, img, excerpt }) {
  return (
    <article className="post">
      <h1 className="post__title">
        <a href="#">{title}</a>
      </h1>
      <div className="post__meta">{meta}</div>
      <img className="post__cover" src={img} alt="" loading="lazy" />
      <p className="post__excerpt">{excerpt}</p>
      <div className="post__actions">
        <a className="btn btn--primary" href="#">Đọc toàn bộ bài viết</a>
        <a className="btn btn--ghost" href="#comments">Để lại bình luận</a>
      </div>
      <div className="divider"></div>
    </article>
  );
}