const express = require("express");
const app = express();
const cors = require("cors");
const ITEMS = require('./config/db.json')

app.use(cors());
app.use(express.json())

app.get("/api/items", (req, res) => {
  res.status(200).send(ITEMS.items)
});

// app.post('/api/items', ())

const PORT = 3009
app.listen(PORT, () => {
  console.log(`Server is up and running on port 3009...`);
});
