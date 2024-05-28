exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404');
    }
    next(err); // Chama o próximo middleware de erro, se houver
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken(); // Corrigido o nome da função
    res.locals.errors = req.flash('errors')
    res.locals.sucess = req.flash('sucess')

    next();
};
