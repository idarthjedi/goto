var express = require('express'),
    router = express.Router(),
    edit = require('../controllers/edit'),
    image = require('../controllers/image');
    bounce = require('../controllers/bounce');

module.exports = function(app) {
    router.get('/images/:image_id', image.index);
    router.post('/images', image.create);
    router.post('/images/:image_id/like', image.like);
    router.post('/images/:image_id/comment', image.comment);
    router.get('/edit', edit.index);
    router.get('*', bounce.index);
    app.use(router);
};

