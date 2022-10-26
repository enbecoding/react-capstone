const express = require("express");
const app = express();

app.get("/api", (req, res) =>{
  res.json()
})

app.listen(process.env.PORT, () => {console.log(`server running on ${process.env.PORT}`)})