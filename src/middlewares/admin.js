let admins = ["Ada","Greta","Vim","Tim"];

function admin (req, res, next) {
    let user = req.query.user;
    if (user) {
        admins.forEach(function (admin) {
            if (user == admin) {
                next();
            }
        });
        res.send('No tienes los privilegios para entrar');
    } else {
        res.send('Debes ingresar un usuario');
    }
}

module.exports = admin;