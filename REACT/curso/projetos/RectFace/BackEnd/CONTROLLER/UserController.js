//importando as bibliotecas e models usados nesse controller
const User  = require("../MODEL/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { default: mongoose } = require("mongoose")
const jwtSecret = process.env.JWT_PASS

//Gerated user token
const generateUserToken = (id) => {
    return jwt.sign({id}, jwtSecret, {expiresIn: "7d",})
}

//Register User and sign in

const register = async (req, res) => {
    const { name, email, password } = req.body;
    //check if user exists
    const user = await User.findOne({email});

    if(user) {
        res.status(422).json({errors: ["Por favor, utilize outro email"]});
        return 
    }

    //genereted password hash
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    //Create user in mongo db
    const newUser = await User.create({
        name,
        email,
        password: passwordHash,
    })

    //if user create sucessfully, return the token
    if(!newUser) {
        res.status(422).json({errors: ["Houver algum erro, por favor volte mais tarde"]});
        return 
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateUserToken(newUser._id),
    })
}

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({email})
   
    if(!user) {
        res.status(404).json({errors: ["O email não existe no nosso banco de dados"]})
        return
    }
    
    if(!(await bcrypt.compare(password, user.password))) {
        res.status(422).json({errors: ["senha invalida"]})
        return
    }

    res.status(201).json({
        _id: user._id,
        profileImage: user.profileImage,
        token: generateUserToken(user._id)
    })
}

const getCurrentUser = async (req, res) => {
    const user = req.user;
    res.status(200).json(user);
}

const update = async (req, res) => {
    const { name, password, bio} = req.body

    let profileImage = null

    if(req.file) {
        profileImage = req.file.filename
    }
    
    const reqUser = req.user

    const user = await User.findById(new mongoose.Types.ObjectId(reqUser._id)).select("-password");

    if(name) {
        user.name = name;
    }

    if(password) {
        const salt = await bcrypt.genSalt();
        const haspass = await bcrypt.hash(password, salt)
        user.password = haspass;
    }

    if(profileImage) {
        user.profileImage = profileImage;
    }

    if(bio) {
        user.bio = bio;
    }

    await user.save()
    console.log(user)
    res.status(200).json(user)
}

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('ID inválido');
        }

        const user = await User.findById(id).select("-password");

        if (!user) {
            return res.status(404).json({ errors: ["Usuário não encontrado"] });
        }

        res.json(user); // Retorna o usuário encontrado
    } catch (error) {

        res.status(500).json({ errors: ["Erro interno ao buscar usuário"] });
    }
};

module.exports = {
    register,
    login,
    getCurrentUser,
    update,
    getUserById
}