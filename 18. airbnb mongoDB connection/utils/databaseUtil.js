const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const MONGO_URI =
  "mongodb+srv://chaitanyachaudhary73:FGGyrjub7QrPXHNf@chaitanya-cluster.7bkyhy1.mongodb.net/?retryWrites=true&w=majority&appName=chaitanya-cluster";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URI)
    .then((client) => {
      callback();
      _db = client.db('airbnb');
    })
    .catch((err) => {
      console.log("Error while connecting to mongoDB: ", err);
    });
};

const getDB = () => {
  if(!_db) {
    throw new Error('MongoDB not connected');
  }
  return _db;
}

module.exports = { mongoConnect, getDB };

