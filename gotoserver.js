var express = require('express'),
    config = require('./server/configure'),
    app = express(),
    mongoose = require('mongoose'),
    vars = require('./server/vars');

app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);

mongoose.connect('mongodb://' + vars.mongo.uri + '/' + vars.mongo.db);
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
});

/*app.get('*', function(req, res){
    res.send(req.url);
    res.end();
});*/


app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});

