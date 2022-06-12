let userController = {
    register: function(req, res) {
        res.render('register', {title: 'registrarse'})
}
}

module.exports = userController;