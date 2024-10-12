const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Chọn cổng bạn muốn

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/process_form', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  // Xử lý dữ liệu ở đây (ví dụ: lưu vào cơ sở dữ liệu, gửi email, v.v.)
  console.log('Dữ liệu nhận được:', { name, email, phone, message });

  // Gửi phản hồi
  res.send('Cảm ơn bạn đã gửi form!');
});

app.listen(port, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${port}`);
});