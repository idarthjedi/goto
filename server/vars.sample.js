var vars = module.exports = {};

vars.env = 'dev';
vars.hostname = 'localhost';

//mongo database
vars.mongo = {};
vars.mongo.uri = process.env.MONGO_URI || 'localhost';
vars.mongo.db = 'gotodb';
