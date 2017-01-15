var dataConnector = require('../helpers/dataConnector');

module.exports = {
    index: function(req, res) {

        var viewModel = {};
        dataConnector(viewModel, function(viewModel){
            res.render('edit', viewModel);
        });
    },
    create: function(req, res) {
        res.send('The image:create POST controller');
    },
    like: function(req, res) {
        res.send('The image:like POST controller');
    },
    comment: function(req, res) {
        res.send('The image:comment POST controller');
    }

};
