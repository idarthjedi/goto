module.exports = {
    index: function(req, res) {

        var viewModel = {
            urls: [
                {
                    uniqueId: 1,
                    name: 'jediah',
                    url_id: 'http://darthjedi.logiodice.com/',
                    description: 'This is Jediah\'s Blog website',
                    views: 100,
                    lastmodified: Date.now
                },
                {
                    uniqueId: 2,
                    name: 'donovan',
                    url_id: 'http://donovan.logiodice.com/',
                    description: 'This is Donovan\'s website',
                    views: 2,
                    lastmodified: Date.now
                },
                {
                    uniqueId: 3,
                    name: 'braeden',
                    url_id: 'http://braeden.logiodice.com/',
                    description: "This is Braeden\'s website",
                    views: 4,
                    lastmodified: Date.now
                }
            ]
        };

                res.render('edit', viewModel);
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
