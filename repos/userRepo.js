const { json } = require("express");
let fs = require("fs"); //import the fs module to read the file
let FILEPATH = "./assets/users.json";

let userRepo = {
  //   get: function () {
  //     return [
  //       { name: "John Does", age: 36, gender: "Male" },
  //       { name: "Krish Shetty", age: 26, gender: "Male" },
  //       { name: "Meena sharma", age: 46, gender: "Female" },
  //     ];
  //   },
  get: function (resolve, reject) {
    fs.readFile(FILEPATH, function (error, data) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(data));
      }
    });
  },
};

module.exports = userRepo;
