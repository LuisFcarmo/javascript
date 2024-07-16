import "../profile/Profile.css"
import { profile } from "../../slices/userSlice"

import { useEffect } from "react"

//hoks
import { useDispatch, useSelector } from "react-redux"

//components
import PainelProfile from "../../component/PainelProfile"
import MakePost from "../../component/MakePost"

const Profile = () => {
    const dispatch = useDispatch()
    
    const { user, loading, error, message } = useSelector((state) => state.user)


    useEffect (() => {
        dispatch(profile())
    }, [dispatch])


    return (
    (user ?   
        <div className = "ProfileContainer">
            <PainelProfile 
                user = {user}
                />
            <MakePost/>
        </div> :
        <><p>...carregando</p></>
        ) 
    )
  
}

export default Profile