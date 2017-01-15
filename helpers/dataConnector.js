var timeDisplay = require('moment');

module.exports = function(viewModel, callback){
    viewModel.dataModel = {
        url:    {
            uniqueId: 1,
            name: 'jediah',
            url_id: 'http://darthjedi.logiodice.com/',
            description: 'This is Jediah\'s Blog website',
            views: 100,
            lastmodified: timeDisplay(Date()).format('LL')
        }
    };
    callback(viewModel);
};