// let fs = require("fs");
// let FILEPATH = "./assets/users.json";

let userRepo = {
  get: function () {
    return [
      { name: "John Does", age: 36, gender: "Male" },
      { name: "Krish Shetty", age: 26, gender: "Male" },
      { name: "Meena sharma", age: 46, gender: "Female" },
    ];
  },
};

module.exports = userRepo;
