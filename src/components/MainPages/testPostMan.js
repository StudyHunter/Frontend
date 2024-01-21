import axios from 'axios';
axios({
  method: 'get',
  url: 'https://294ba3ba-6132-4223-b4cd-cd1aea901212.mock.pstmn.io/list',
  responseType: 'json',
}).then(function (response) {
  console.log(response.data);
});

// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// const database = [
//   { id: 1, title: '글1' },
//   { id: 2, title: '글2' },
//   { id: 3, title: '글3' },
// ];

// app.post('/add-database', function (req, res) {
//   const title = req.body.title;
//   database.push({
//     id: database.length + 1,
//     title,
//   });
//   res.send(database);
// });
// app.listen(3000, () => {
//   console.log('Server On');
// });
