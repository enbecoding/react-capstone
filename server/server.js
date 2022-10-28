const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json())


app.listen(3003, () => {
  console.log(`Server is up and running...`);
});
