module.exports = {
    index: function (req, res) {
        res.render('index')
    },
    admin: (req, res) => {
        res.send('Hola Admin: ' + req.query.user);
    }
};