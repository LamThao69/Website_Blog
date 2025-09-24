const db = require('../config/db');
const bcrypt = require('bcryptjs');

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send('Thiếu email hoặc mật khẩu');

  // Query user by email, then compare password with bcrypt
  db.query('SELECT id, email, password FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).send('Lỗi truy vấn database');
    if (!results || results.length === 0) return res.status(401).send('Sai email hoặc mật khẩu!');

    const user = results[0];
    bcrypt.compare(password, user.password, (bcryptErr, same) => {
      if (bcryptErr) return res.status(500).send('Lỗi khi xác thực mật khẩu');
      if (same) {
        // TODO: tạo session / JWT ở đây
        return res.send('Đăng nhập thành công!');
      }
      return res.status(401).send('Sai email hoặc mật khẩu!');
    });
  });
};

exports.register = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send('Thiếu email hoặc mật khẩu');

  // Check existing
  db.query('SELECT id FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).send('Lỗi database');
    if (results.length > 0) return res.status(409).send('Email đã tồn tại');

    // Hash password
    bcrypt.genSalt(10, (saltErr, salt) => {
      if (saltErr) return res.status(500).send('Lỗi khi xử lý mật khẩu');
      bcrypt.hash(password, salt, (hashErr, hashed) => {
        if (hashErr) return res.status(500).send('Lỗi khi xử lý mật khẩu');
        db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashed], (err2) => {
          if (err2) return res.status(500).send('Không thể tạo người dùng');
          res.send('Đăng ký thành công');
        });
      });
    });
  });
};
