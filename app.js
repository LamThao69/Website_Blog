const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db");

const app = express();
const PORT = 3000;

// Đọc dữ liệu từ form
app.use(bodyParser.urlencoded({ extended: false }));

// Phục vụ file tĩnh (html, css, ảnh)
app.use(express.static(__dirname));

// Route xử lý đăng nhập
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, results) => {
      if (err) return res.send("Lỗi truy vấn database");
      if (results.length > 0) {
        res.send("Đăng nhập thành công!");
      } else {
        res.send("Sai email hoặc mật khẩu!");
      }
    }
  );
});

// Trang chủ (có thể sửa lại nếu muốn)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
