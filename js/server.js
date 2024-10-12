const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; /*giả sử */

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/process_form', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

 
  console.log('Dữ liệu nhận được:', { name, email, phone, message });

 
  res.send('Cảm ơn bạn đã gửi form!');
});

app.listen(port, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${port}`); /*giả sử */
});