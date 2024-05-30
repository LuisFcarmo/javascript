const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')


class Login  {
    constructor (body) {
        this.body = body;
        this.erros = []
        this.user = null
    }
}