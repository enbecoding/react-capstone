const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require('mysql')

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"password",
  database:"reacthealthlog"
})
db.connect()

// db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

app.get('/api/items/:id', async (req, res) => {
  db.query(`SELECT * FROM fooditems WHERE userid = '${req.params.id}'`, (err, results) => {
    res.status(200).send(results)
  })
})

app.post('/api/items', async (req, res) => {
  const {name, calories_amt, userid} = req.body
  db.query(`INSERT INTO fooditems (name, calories_amt, userid) 
  VALUES ('${name}', '${calories_amt}', '${userid}');
  `, (err, results) => {
    res.status(200).send(results)
  })
})

app.delete('/api/items/:id', async (req,res) => {
  db.query(`DELETE FROM fooditems WHERE id = '${req.params.id}'`, (err, results) => {
    res.status(200).send(results)
  })
})

app.delete('/api/deleteitems/:id', async (req,res) => {
  db.query(`DELETE FROM fooditems WHERE userid = '${req.params.id}'`, (err, results) => {
    if (err) throw err
    console.log(results)
    res.status(200).send(results)
  })
})

const PORT = 3009
app.listen(PORT, () => {
  console.log(`Server is up and running on port 3009...`);
});
