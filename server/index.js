const express = require("express");
const port = 4000;
const multer = require("multer");
const storageConfig = require("./multer/multerConfig");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/dbConfig");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "officeshop",
  password: "root",
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});
const sql = `create table if not exists specialtable(
    id int primary key auto_increment,
    name varchar(255) not null,
    age int not null
  )`;
const sql2 = `SELECT title,
SUM (CASE price WHEN '12' THEN ProviderId ELSE 0 END) AS "12",
SUM (CASE price WHEN '15' THEN ProviderId ELSE 0 END) AS "15",
SUM (CASE price WHEN '21' THEN ProviderId ELSE 0 END) AS "21",
SUM (CASE price WHEN '25' THEN ProviderId ELSE 0 END) AS "25",
SUM (CASE price WHEN '35' THEN ProviderId ELSE 0 END) AS "35",
SUM (CASE price WHEN '38' THEN ProviderId ELSE 0 END) AS "38",
SUM (CASE price WHEN '41' THEN ProviderId ELSE 0 END) AS "41",
SUM (CASE price WHEN '45' THEN ProviderId ELSE 0 END) AS "45",
SUM (CASE price WHEN '55' THEN ProviderId ELSE 0 END) AS "55",
SUM (CASE price WHEN '150' THEN ProviderId ELSE 0 END) AS "150",
SUM (CASE price WHEN '521' THEN ProviderId ELSE 0 END) AS "521"
FROM goods 
GROUP BY type`;

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(multer({ storage: storageConfig }).single("filedata"));
app.use(cors());

app.use("/goods", require("./routes/goodsRoute"));
app.use("/users", require("./routes/usersRoute"));
app.use("/cart", require("./routes/cartsRoute"));
app.use("/order", require("./routes/ordersRoute"));

app.post("/", (req, res) => {
  console.log(req);
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    else console.log(`created`);
  });
});
app.post("/cross", (req, res) => {
  console.log(req);
  connection.query(sql2, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
  });
});

// db.sync();

app.listen(port, () => console.log(`listenin on ${port}`));
