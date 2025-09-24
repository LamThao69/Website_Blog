const db = require('../config/db');

const samplePosts = [
  {
    id: 1,
    title: 'Nhiều người trẻ theo đuổi trào lưu sống tích cực trong năm mới',
    meta: 'Published October 9 , 2025 · by Lâm Thảo',
    image: 'https://i1-giadinh.vnecdn.net/2022/01/11/1-6103-1641901844.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=upAo4PNU1ujgH5xSXPoteg',
    excerpt: 'Trong bối cảnh nhiều người trẻ chuyển đổi về tư duy nhận thức...'
  },
  {
    id: 2,
    title: 'Ấm lòng nhóm học sinh Cần Thơ dùng 100.000 đồng quà 2/9 nấu ăn cho người nghèo',
    meta: 'Published October 9 , 2025 · by Lâm Thảo',
    image: 'https://cdn-i.vtcnews.vn/upload/2025/09/05/5a182cb5-4751-4844-84c1-49adcbe37480-16303265.jpeg',
    excerpt: 'Trong khi nhiều bạn trẻ háo hức dùng số tiền 100 nghìn đồng quà Tết...'
  }
];

exports.list = (req, res) => {
  const sql = 'SELECT id, title, SUBSTRING(content,1,300) AS excerpt, image, author, published_at FROM posts ORDER BY published_at DESC LIMIT 50';
  db.query(sql, (err, results) => {
    if (err) {
      // If table doesn't exist or other DB error, return sample posts
      return res.json(samplePosts);
    }

    const posts = results.map(r => ({
      id: r.id,
      title: r.title,
      excerpt: r.excerpt || '',
      image: r.image || null,
      meta: `Published ${r.published_at ? new Date(r.published_at).toLocaleDateString() : ''} · by ${r.author || 'Unknown'}`
    }));
    res.json(posts);
  });
};

exports.detail = (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT id, title, content, image, author, published_at FROM posts WHERE id = ? LIMIT 1';
  db.query(sql, [id], (err, results) => {
    if (err || !results || results.length === 0) {
      // fallback: try sample
      const sample = samplePosts.find(p => String(p.id) === String(id));
      if (sample) return res.json(sample);
      return res.status(404).send('Not found');
    }
    const r = results[0];
    res.json({
      id: r.id,
      title: r.title,
      content: r.content,
      image: r.image || null,
      meta: `Published ${r.published_at ? new Date(r.published_at).toLocaleDateString() : ''} · by ${r.author || 'Unknown'}`
    });
  });
};
