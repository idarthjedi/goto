let express = require('express'),
    config = require('./server/configure'),
    app = express(),
    vars = require('./server/vars'),
    dataConnection = require('./helpers/db');



app.set('port', process.env.PORT || vars.env.port);
app.set('views', __dirname + '/views');
app = dataConnection(config(app));



/*app.get('*', function(req, res){
    res.send(req.url);
    res.end();
});*/

console.log(app.get('port'));


app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});

