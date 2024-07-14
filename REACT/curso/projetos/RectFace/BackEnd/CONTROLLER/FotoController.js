const Image = require("../MODEL/Image")
const User = require("../MODEL/User")
const { default: mongoose } = require("mongoose")

//inser a photo with an user related to it
const registerFoto = async (req, res) => {
    const { title } = req.body
    const image = req.file.filename

    const reqUser = req.user

    const user = await User.findById(reqUser._id)

    const newPhoto = await Image.create({
        image,
        title,
        userId: user._id,
        userName: user.name,
    });

    if(!newPhoto) {
        return res.send(422).json({
            erros: ["houve um problema por favor tente novamente mais tarde"]
        })
    }

    res.status(201).json(newPhoto)
}

const updateFoto = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const reqUser = req.user;

        // Verifica se o ID é válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ erros: ["ID inválido"] });
        }

        // Encontra a foto pelo ID
        const foto = await Image.findById(id);

        if (!foto) {
            return res.status(404).json({ erros: ["Foto não encontrada"] });
        }

        // Verifica se o usuário tem permissão para editar a foto
        if (!foto.userId.equals(reqUser._id)) {
            return res.status(403).json({ erros: ["Usuário não tem permissão para editar imagens que não pertencem a ele"] });
        }

        // Atualiza o título da foto, se fornecido
        if (title) {
            foto.title = title;
        }

        // Salva a foto atualizada
        await foto.save();

        // Retorna a foto atualizada
        res.status(200).json({
            foto: foto,
            NewTitle: title
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erros: ["Erro interno ao atualizar foto"] });
    }
}


const removeFoto = async (req, res) => {
    const { id } = req.params;
    const reqUser = req.user
    
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('ID inválido');
        }
        const img = await Image.findById(id)
        
        if(!img) {
            res.status(404).json({erros: ["foto não encontrada"]})
            return;
        }

        if(!img.userId.equals(reqUser._id)) {
            res.status(422).json({erros: ["ocorreu um erro por favor tente novamente mais tarde"]})
            return
        }


        await Image.findByIdAndDelete(id)
        res.status(200).json({id: img._id, message: "foto excluida com sucesso"})
        return          
    } catch(error) {
        console.log(error)
        res.status(500).json({ errors: ["Erro interno ao buscar imagem"] });
        return 
    }
}

const getAllfoto = async (req, res) => {
    const fotos = await Image.find({}).sort([["createdAt", -1]]).exec()
    if(!fotos) return res.status(404).json({erros: ["aconteceu um erro por favor volte mais tarde"]})
    return res.status(200).json(fotos)
}

const getAllFotosCurrentUser = async (req, res) => {
    const userRef = req.user;

    try {
        const fotos = await Image.find({userId: userRef._id});
        if(!fotos) return res.status(404).json({erros: ["Aconteceu um erro por favor volte mais tarde"]})
            if(fotos.length > 0) {
            return res.status(200).json({
                fotos: fotos,
                status: "usuario possui fotos"
            });
        } else {
            return res.status(200).json({
                fotos: fotos,
                status: "usuario não possui fotos cadastradas"
            })
        }
    } catch (error) {
      return res.status(404).json({erros: ["Aconteceu um erro por favor volte mais tarde"]})
    }
}

const getAllFotosById = async (req, res) => {
    const { id } = req.params;

    try {
        const fotos = await Image.find({userId: id}).sort([["createdAt", -1]]).exec();
        if(!fotos) return res.status(404).json({erros: ["Aconteceu um erro"]})
        if(fotos.length > 0) {
            return res.status(200).json({
                fotos: fotos,
                status: "usuario possui fotos"
            });
        } else {
            return res.status(200).json({
                fotos: fotos,
                status: "usuario não possui fotos cadastradas"
            })
        }
    
    } catch (error) {
        res.status(404).json({erros: ["Aconteceu um erro por favor volte mais tarde"]})
    }
}

const getFotoById = async (req, res) => {
    const { id } = req.params;
    try {
        const foto = await Image.findById(id);
        if(!foto) return res.status(404).json({erros: ["Foto não consta no nosso banco de dados"]})
        
        return res.status(200).json(foto);
        } catch (error) {
            res.status(404).json({erros: ["Aconteceu um erro por favor volte mais tarde"]})
    }
}

//like funcionality
const likefoto = async (req, res) => {
    const { id } = req.params;
    const userReq = req.user;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('ID inválido');
    }

    const foto = await Image.findById(id)

    if(!foto) {
        return res.status(404).json({erros: ["erros ao buscar a foto no banco de dados"]})
    }

    if(foto.likes.includes(userReq._id)){
        console.log(userReq._id)
        foto.likes = foto.likes.filter((likeid) => !likeid.equals(userReq._id))
        await foto.save()
        res.status(200).json({
            photoId: id,
            userId: req._id,
            likes: foto.likes,
            message: "aplicou o deslike"
        })
        return
    } else {
        foto.likes.push(userReq._id)
        await foto.save()
        res.status(200).json({
            photoId: id,
            userId: req._id,
            likes: foto.likes,
            message: "a foto foi curtida"
        })
        console.log("dei like")

        return;
    }
}

const ComentFoto = async (req, res) => {
    const { id  } = req.params
    const { coment } = req.body
    const userReq = req.user

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('ID inválido');
    }

    const foto = await Image.findById(id)
    const user = await User.findById(userReq._id)

    if(!foto) {
        res.status(404).json([{erros: "aconteceu um erro"}])   
        return
    }
    
    const userComent = {
        coment,
        userName: user.name,
        userImage: user.profileImage,
        userId: user._id,
    }

    foto.coments.push(userComent)
    await  foto.save()
    console.log(user)
    return res.status(200).json(userComent)
}

const SearchFoto = async (req, res) => {
    const { q } = req.query

    const fotos = await Image.find({title: new RegExp(q, "i")}).exec()

    res.status(200).json(fotos)
}

module.exports = {
    registerFoto,
    updateFoto,
    removeFoto,
    getAllfoto,
    getAllFotosCurrentUser,
    getAllFotosById,
    getFotoById,
    likefoto,
    ComentFoto,
    SearchFoto,
}