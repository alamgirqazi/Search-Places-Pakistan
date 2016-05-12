exports.render = function (req, res) {

    res.render('index', {
        title: 'hello world',
        user: req.user ? JSON.stringify(req.user) : ''

    });
};