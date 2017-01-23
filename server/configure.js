var path = require('path'),
    routes = require('./routes'),
    exphbs = require('express-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    moment = require('moment');



module.exports = function(app) {
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({'extended':true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser('Z3aNdDf*&Y^@las@kd_38')); //TODO: Needs to be regenerated in the private build
    routes(app); //moving the routes to routes folder.

    app.use('/public/', express.static(path.join(__dirname,
        '../public')));
    if ('development' === app.get('env')) {
        app.use(errorHandler());
    }

    app.engine('hbs', exphbs.create({
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials'],
        extname: '.hbs',
        helpers: {
            timeago: function(timestamp) {
                return moment(timestamp).startOf('minute').fromNow();
            }
        }
    }).engine);
    app.set('view engine', 'hbs');


    return app;
};