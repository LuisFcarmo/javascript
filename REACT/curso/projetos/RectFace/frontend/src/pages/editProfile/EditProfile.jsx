import "../editProfile/EditProfile.css" 
//hooks
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

//redux
import { profile, updateProfile, resetMessage } from "../../slices/userSlice"

//components
import ErrorMessage from "../../component/ErrorMessage"


import { upload } from "../../utils/config"

const EditProfile = () => {
  const dispatch = useDispatch() 

  //states referentes a esta pagina
  const [ nome, setName ] = useState("")
  const [ bio, setBio ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ profileImage, setImageProfile ] = useState("")
  const [ previewImage, setPreviewImage ] = useState("")

  //Dados retirados do meu reducer
  const { user, message, error, loading } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(profile())
  }, [dispatch])

  //atualizando o 
  useEffect(() => {

    if(user){
        setName(user.name ? user.name : "")
        setBio(user.bio ? user.bio : "")
        setEmail(user.email ? user.email : "")
    }

  }, [user])


  async function handleSubmit(e) {
    e.preventDefault();

    // Gather user data from states
    const userData = {
      nome
    };

    if (profileImage) {
      userData.profileImage = profileImage;
    }

    if (bio) {
      userData.bio = bio;
    }

    if (password) {
      userData.password = password;
    }

    // build form data
    const formData = new FormData();

    const userFormData = Object.keys(userData).forEach(key => {
      formData.append(key, userData[key]);
    });

    formData.append('user', userFormData);

    await dispatch(updateProfile(formData));

    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  }

  const handleFile = (event) => {
    const image  = event.target.files[0]

    setPreviewImage(image)

    setImageProfile(image)
  }


  return (
    <div id = "edit-profile">
        <h2>Edite seus dados</h2>
        <p className = "subtitle">Adicione uma imagem de perfil e conte mais sobre você</p>
        {
            (user.profileImage || previewImage) && (
                <img 
                    className = "profileimage"
                    src = { previewImage ? URL.createObjectURL(previewImage): `${upload}/users/${user.profileImage}`}
                    alt = {user.name}    
                />
            )
        }
        <form onSubmit = {handleSubmit}>
            <input 
                type = "text" 
                placeholder="nome"
                onChange={(event) => setName(event.target.value)}
                value = {nome || ""}
                />
            <input 
                type = "email" 
                value = {email || ""}
                disabled/>
            <label>
                <span>imagem do perfil</span>
                <input 
                    type = "file" 
                    onChange = {handleFile}
                    />
            </label>
            
            <label>
                <span>bio:</span>
                <input 
                type="text" 
                placeholder = "descrição do perfil"
                value = {bio}
                onChange={(event) => setBio(event.target.value)}
                />
            </label>

            <label>
                <span>Quer alterar sua senha ?</span>
                <input 
                    type = "password" 
                    placeholder = "digite sua nova senha"
                    onChange={(event) => setPassword(event.target.value)}
                    value = {password}
                    />
            </label>
            {!loading && <button type="submit">Cadastrar-se</button>}
            {loading && <button type="submit" disabled>aguarde</button>}
            {error && <ErrorMessage msg = {error} type = "error"/>}    
            {message && <ErrorMessage msg = {message} type = "sucess"/>}       
   
         </form>
    </div>
  )
}

export default EditProfile