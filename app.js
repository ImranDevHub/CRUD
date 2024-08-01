const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mysqlExample',
  password: '1111',
  database: 'mysqlexample-db',
});

connection.connect(err => {
  if (err) return console.error(err);
  console.log('Connected to the MySQL server.');
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/crud', express.static('./'));

// app.use(bodyParser.urlencoded({ extended: true }));

app.post('/crud', function (req, res) {
  //   console.log(req.body);
  res.send('It Working');
});

app.listen(1234, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Server is running on port 3000');
});
