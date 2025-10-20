

1) Clone repo và vào thư mục project
```powershell
git clone <repo-url>
cd personal-blog
```

2) Cài dependencies
```powershell
npm install
```

3) Tạo file `.env` từ mẫu (nếu có) và cập nhật biến môi trường
- Mở file `.env` trong project (.env) và thiết lập:
  - DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
  - NEXTAUTH_SECRET (một chuỗi ngẫu nhiên dài, ví dụ dùng openssl)
  - RESEND_API_KEY (nếu dùng Resend)
- Nếu bạn chưa có .env, copy từ `.env.example` (nếu repo có) hoặc tạo mới:
```powershell
cp .env.example .env  # nếu .env.example tồn tại
# hoặc tạo file rỗng và chỉnh sửa thủ công
notepad .env
```

4) (Nếu dùng Prisma) Tạo database hoặc pull schema, rồi generate client
- Nếu bạn có migrations/schema và muốn áp dụng (mới), chạy:
```powershell
npx prisma migrate dev --name init
```
- Nếu database đã tồn tại và bạn muốn kéo schema:
```powershell
npx prisma db pull
npx prisma generate
```
- Mở Prisma Studio để xem dữ liệu:
```powershell
npx prisma studio
```

5) Chạy dev server
```powershell
npm run dev
```
- Mở trình duyệt: http://localhost:3000

6) Những lưu ý quan trọng
- Đừng commit `.env` vào git; file đó chứa secrets.
- Nếu dùng NextAuth, đặt `NEXTAUTH_SECRET` trong `.env`.
- Nếu dùng Resend/Nodemailer để gửi mail (quên mật khẩu), đặt biến API key tương ứng.
- Nếu gặp lỗi Tailwind/CSS: chạy `npm run dev` và đọc logs; đảm bảo Node.js & npm ở phiên bản tương thích (Next.js 15 -> Node 18+ khuyến nghị).

Muốn tôi tạo luôn một `README.md` với phần này trong project không? Tôi có thể tạo file `README.md` ở root với nội dung trên (hoặc mở rộng thêm hướng dẫn deploy).
