import "../profile/Profile.css"
import { profile } from "../../slices/userSlice"
import { GetAllPost } from "../../slices/FotoSlice"
import { useEffect } from "react"

//hoks
import { useDispatch, useSelector } from "react-redux"

//components
import PainelProfile from "../../component/PainelProfile"
import MakePost from "../../component/MakePost"
import DashBoard from "../../component/DashBoard"


const Profile = () => {
    const dispatch = useDispatch()
    
    const { user, loading, error, message } = useSelector((state) => state.user)
    const { foto } = useSelector((state) => state.foto)

    useEffect (() => {
        dispatch(profile())
    }, [dispatch])

    useEffect(() => {
        dispatch(GetAllPost())
    }, [dispatch])

    console.log(foto.fotos)

    return (
    (user && foto ?   
        <div className = "ProfileContainer">
            <PainelProfile 
                user = {user}
                />
            <MakePost/>
            <DashBoard fotos = {foto.fotos}/>
        </div> :
        <><p>...carregando</p></>
        ) 
    )
  
}

export default Profile