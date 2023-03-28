//import express from "express";

let express = require("express");
//import userRepo from "./repos/userRepo";
const userRepo = require("./repos/userRepo");

let app = express();

//define the route
let router = express.Router();
//let users = userRepo.get();

app.use(express.json()); //received the json data in post method
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
        message: "User data fetched successfully",
        data: data,
      });
    },
    function (err) {
      next(err);
    }
  );
});

//Create User
router.post("/", (req, res, next) => {
  userRepo.createUser(
    req.body,
    function (data) {
      res.status(201).json({
        status: 201,
        statusText: "Create",
        message: "Users created successfully",
        data: data,
      });
    },
    function (err) {
      next(err);
    }
  );
});

//Update the user
router.put("/:id", (req, res, next) => {
  let id = req.params.id;
  userRepo.updateUser(
    id,
    req.body,
    function (data) {
      res.status(200).json({
        status: 200,
        statusText: "Update",
        message: "Users Updated successfully",
        data: data,
      });
    },
    //handle the error
    function (err) {
      res.status(404).json({
        status: 404,
        statusText: err.message,
        error: err,
      });
    }
  );
});

const port = 5000;
//listen on port number
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
