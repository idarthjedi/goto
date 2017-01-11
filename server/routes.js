var express = require('express'),
    router = express.Router(),
    edit = require('../controllers/edit'),
    //image = require('../controllers/image');
    bounce = require('../controllers/bounce');

module.exports = function(app) {
    router.get('/edit/:url_id', edit.index);
    router.get('/edit', edit.index);
    router.post('/edit', edit.create);
    router.post('/edit/:url_id/like', edit.like);
    router.post('/edit/:url_id/comment', edit.comment);
    router.get('*', bounce.index);
    app.use(router);
};

