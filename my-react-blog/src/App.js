import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <Post
        title="Nhiều người trẻ theo đuổi trào lưu sống tích cực trong năm mới"
        meta="Published October 9 , 2025 · by Lâm Thảo"
        img="https://i1-giadinh.vnecdn.net/2022/01/11/1-6103-1641901844.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=upAo4PNU1ujgH5xSXPoteg"
        excerpt="Trong bối cảnh nhiều người trẻ chuyển đổi về tư duy nhận thức, thương hiệu Trung Nguyên Legend đã đưa ra thông điệp..."
      />
      <Post
        title="Ấm lòng nhóm học sinh Cần Thơ dùng 100.000 đồng quà 2/9 nấu ăn cho người nghèo"
        meta="Published October 9 , 2025 · by Lâm Thảo"
        img="https://cdn-i.vtcnews.vn/upload/2025/09/05/5a182cb5-4751-4844-84c1-49adcbe37480-16303265.jpeg"
        excerpt="Trong khi nhiều bạn trẻ háo hức dùng số tiền 100 nghìn đồng quà Tết Độc lập của Chính phủ để mua sắm, ăn uống hay vui chơi..."
      />
    </div>
  );
}

export default App;
