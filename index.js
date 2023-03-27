//import express from "express";

let express = require("express");
//import userRepo from "./repos/userRepo";
const userRepo = require("./repos/userRepo");

let app = express();

//define the route
let router = express.Router();
//let users = userRepo.get();

app.use("/api", router);

//send the array of users
// const users = [
//   { name: "John Smith", age: 36, gender: "Male" },
//   { name: "Krish Shetty", age: 26, gender: "Male" },
//   { name: "Meena sharma", age: 46, gender: "Female" },
// ];

//Read operation
router.get("/", (req, res, next) => {
  //res.status(200).send("Successful");
  //res.status(200).send(users);
  userRepo.get(
    function (data) {
      res.status(200).json({
        status: 200,
        statusText: "ok",
        message: "Users data fetched successfully",
        data: data,
      });
    },
    function (err) {
      next(err);
    }
  );
});

//get by id user data
router.get("/:id", (req, res, next) => {
  //for id
  let id = req.params.id;
  userRepo.getById(
    id,
    function (data) {
      res.status(200).json({
        status: 200,
        statusText: "ok",
        message: "Users data fetched successfully",
        data: data,
      });
    },
    function (err) {
      next(err);
    }
  );
});

const port = 5000;
//listen on port number
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
