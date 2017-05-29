let mongoose = require('mongoose'),
    vars = require('../server/vars');



module.exports = function(app) {

    mongoose.connect('mongodb://' + vars.mongo.uri + '/' + vars.mongo.db);
    mongoose.connection
        .on('open', () => {
            console.log('Mongoose connected.');
        })
        .on('error', () => {
            console.log('Monogose connection failed.');
        });


    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            console.log('Mongoose disconnected through app termination');
            process.exit(0);
        });
    });
    app.bounceData = mongoose;
    return app;

};