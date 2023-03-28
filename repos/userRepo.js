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

  //get the user by id
  getById: function (id, resolve, reject) {
    fs.readFile(FILEPATH, function (error, data) {
      if (error) {
        reject(error);
      } else {
        let users = JSON.parse(data);
        let singleUser = users.find((user) => user.id == id);
        resolve(singleUser);
      }
    });
  },

  //Add or Create user
  createUser: function (user, resolve, reject) {
    //read the file
    fs.readFile(FILEPATH, function (error, data) {
      if (error) {
        reject(error);
      } else {
        let users = JSON.parse(data);
        if (user) {
          //push the user inside the users array
          users.push(user);
        }
        //writting with new user in users array
        fs.writeFile(FILEPATH, JSON.stringify(users), function (error) {
          if (error) {
            reject(error);
          } else {
            resolve(user);
          }
        });
      }
    });
  },

  //Update user
  updateUser: function (id, newUserData, resolve, reject) {
    //read the file
    fs.readFile(FILEPATH, function (error, data) {
      if (error) {
        reject(error);
      } else {
        let users = JSON.parse(data);
        //find the user with the id
        let user = users.find((user) => user.id == id);
        //using Object.assign method merged user with updated value
        Object.assign(user, newUserData);
        console.log(newUserData);
        //writting with new user in users array
        fs.writeFile(FILEPATH, JSON.stringify(users), function (error) {
          if (error) {
            reject(error);
          } else {
            resolve(user);
          }
        });
      }
    });
  },
};

module.exports = userRepo;
