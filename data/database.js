const dotnev = require('dotenv');
dotnev.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
    if (database) {
        console.log('Database is already initalized!');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
        database = client;
        callback(null, database);
    })
    .catch((err) => {
        callback(err)
    });
};

const getDatabase = () => {
    if (!database) {
        throw Error('Database is not initalized!')
    }
    return database;
};
module.exports = {initDb, getDatabase};