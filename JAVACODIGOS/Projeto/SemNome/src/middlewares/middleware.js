exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        console.log('erro do crfs token')
        return res.render('404');
    }
    next(err); // Chama o próximo middleware de erro, se houver
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.erros = req.flash('errors')
    res.locals.usuario = req.session.usuario
    res.locals.csrfToken = req.csrfToken(); // Corrigido o nome da função
    next();
};


exports.ConfirmLogin = (req, res, next) => {
    if (!req.session.usuario) {
        req.flash('errors', 'Você precisa fazer login para utilizar esta funcionalidade.');
        req.session.save(() => res.redirect('/'));
        return
    }
    next()
}
