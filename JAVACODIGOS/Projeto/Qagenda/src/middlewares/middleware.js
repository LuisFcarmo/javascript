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
    //criando uma variavel local com o usuario que foi logado
    res.locals.user = req.session.user

    next();
};

exports.loginRequired = (req, res, next) => {
    if(!req.session.user) {
      req.flash('errors', 'Você precisa fazer login.');
      req.session.save(() => res.redirect('/'));
      return;
    }

    next();
  };