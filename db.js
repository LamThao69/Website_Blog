const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "310103",
  database: "webblog",
});

db.connect((err) => {
  if (err) {
    console.error("Kết nối thất bại:", err);
  } else {
    console.log("Kết nối thành công đến MySQL!");
  }
});

module.exports = db;
