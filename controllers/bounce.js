module.exports = {
    index: function(req, res) {
        //within this function we will look up a short-link from the mongodb,
        //if the link is found, we will redirect to the known link
        //if the link is not found, we will redirect to edit render
        //console.log(req.url);
        var redirectPath = lookupURL(req.url);
        switch (redirectPath)
        {

            case '/undefined':
                res.render('edit');
                break;
            default:
                res.redirect(redirectPath);
                break;

        }
    }
};

function lookupURL(url)
{
    switch  (url)
    {
        case '/jediah':
            return 'http://darthjedi.logiodice.com';
            break;
        default:
            return '/undefined';
            break;
    }
};


