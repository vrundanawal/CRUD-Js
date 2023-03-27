//import express from "express";
let express = require("express");

let app = express();

//define the route
let router = express.Router();

app.use("/api", router);

//send the array of users
const users = [
  { name: "John Smith", age: 36, gender: "Male" },
  { name: "Krish Shetty", age: 26, gender: "Male" },
  { name: "Meena sharma", age: 46, gender: "Female" },
];

//Read operation
router.get("/", (req, res, next) => {
  //res.status(200).send("Successful");
  res.status(200).send(users);
});

const port = 5000;
//listen on port number
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
