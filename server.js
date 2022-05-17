// require dependencies
const express = require("express")
const app = express()
// express web server
const port = 3000;

// route goes here
const fruits = ["apple", "banana", "pear"];
app.get("/fruits", (req, res) => {
  res.send(fruits);
});

app.listen(3000, () => {
  console.log(`Listening to port 3000`, port);
});
