// require dependencies
const express = require("express")
const app = express()
// express web server
const port = 3000;

// route goes here
const fruits = [
    {
      name: "apple",
      color: "red",
      readyToEat: true,
    },
    {
      name: "pear",
      color: "green",
      readyToEat: false,
    },
    {
      name: "banana",
      color: "yellow",
      readyToEat: true,
    },
  ]
app.get("/fruits", (req, res) => {
  res.send(fruits);
});
//added show route
app.get("/fruits/:indexOfFruitsArray",  (req, res) => {

res.send(fruits[req.params.indexOfFruitsArray])

})
app.listen(3000, () => {
  console.log(`Listening to port 3000`, port);
});
