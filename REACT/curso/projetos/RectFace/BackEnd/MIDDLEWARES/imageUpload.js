const multer = require("multer")
const path = require("path")
const { v4: uuidv4 }  = require("uuid")

//configure to destiney of image
const imagestorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = ""
        
        if(req.baseUrl.includes("users")) {
            folder = "users"
        }
        else if(req.baseUrl.includes("fotos")) {
            folder = "photos"
        }

        cb(null, `uploads/${folder}/`)
    },
    filename: function (req, file, cb) {
        //renomeando os nome dos arquivos para não ter substituição de imagens
        cb(null, uuidv4() + path.extname(file.originalname)) // data.jpg
    }
})

const imageUpload = multer({
    storage: imagestorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            return cb(new Error("Por favor, envie apenas arquivos png ou jpg"));
        }
        cb(null, true);
    }
})

module.exports = { imageUpload };