const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cuposugar");

const userSeed = [
  {
    name: "Taylor Swift",
    email: "taylor@gmail.com",
    password: "12345",
    neighborhood: "capital hill",
    date: new Date(Date.now()),
  },
  {
    name: "Chaka Khan",
    email: "chaka@gmail.com",
    password: "567",
    neighborhood: "capital hill",
    date: new Date(Date.now()),
  },
  {
    name: "Mariah Cary",
    email: "mcary@yahoo.com",
    password: "789",
    neighborhood: "bellevue",
    date: new Date(Date.now()),
  },
];

const neighborhoodSeed = [
  { name: "capital hill", description: "cool place", zipCode: "98102" },
  { name: "bellevue", description: "it has a mall", zipCode: "98335" },
];

const postSeed = [
  {
    name: "Tricycle",
    description: "bike with 3 wheels",
    picture: "https://placekitten.com/300/200",
    owner: "Taylor Swift"
  },
  { 
    name: "Scarf",
    description: "alpaca scarf",
    picture: "https://placekitten.com/300/200",
    owner: "Mariah Carey"
  },
  { 
    name: "Plant",
    description: "monstera",
    picture: "https://placekitten.com/300/200",
    owner: "Chaka Khan"
  }
];


db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Neighborhood.remove({})
  .then(() => db.Neighborhood.collection.insertMany(neighborhoodSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

  db.Post.remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

