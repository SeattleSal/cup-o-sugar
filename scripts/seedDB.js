const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cuposugar");

const seed = [
  {
    name: "Taylor Swift",
    email: "taylor@gmail.com",
    password:"12345",
    neighborhood:"capital hill",
      date: new Date(Date.now())
  },
  {
    name: "Chaka Khan",
    email: "chaka@gmail.com",
    password:"567",
    neighborhood:"capital hill",
      date: new Date(Date.now())
    
  },
  {
    name: "Mariah Cary",
    email: "mcary@yahoo.com",
    password:"789",
    neighborhood:"bellevue",
      date: new Date(Date.now())
    
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(seed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
