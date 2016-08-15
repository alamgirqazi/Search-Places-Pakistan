exports.render = function (req, res) {

    res.render('index', {
        title: 'hello world',
        user: req.user ? JSON.stringify(req.user) : ''

    });
};
//
// exports.create = function (req, res) {
//     var article = new Article(req.body);
//     article.title = req.body.title;
//     article.content = req.body.content;
//     article.creator = req.user;
//     article.save(function (err) {
//         if (err) {
//             return res.status(400).send({message: getErrorMessages(err)});
//         } else {
//             return res.json(article);
//         }
//     })
//
// };