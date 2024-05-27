module.exports = (req, res, next) => {
    //são funções executadas apos as promisses ou seja entre os gets
    console.log()
    console.log("meu mid fora do principail")
    console.log()
    next()
}