exports.checkCsrfError = (err, req, resp, next) => {
    if(err && err.code === 'EBADCSRTOKEN') {
        return res.send('BAD CSRF')
    }
}

exports.csrfMiddleaware = (req, res, next) => {
    res.locals.csrfToken = req.crsfToken()
    next()
}