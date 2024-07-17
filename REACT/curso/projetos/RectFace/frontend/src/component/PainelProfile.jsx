import "./PainelProfile.css"
import { upload } from "../utils/config"
const PainelProfile = ({user}) => {
  
  return (
    <div className = "ContainerPainel">
        <img src = {`${upload}/users/${user.profileImage}`} alt = {user.name}  className = "profileimageperfil"/>
        <section className = "ContainerDesk">
            <p>{user.name}</p>
            <p>{user.bio}</p>
        </section>
    </div>
  )
}

export default PainelProfile