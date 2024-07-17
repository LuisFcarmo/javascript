import { upload } from '../utils/config'
import "./CardUser.css"

const CardUser = ({ userName, coment, userImage}) => {
  return (
    <div className = "CardUserContainer">
        <img src = {`${upload}/users/${userImage}`} alt = {userName} className = 'imgprofile'/>
        <p>{coment}</p>
    </div>
  )
}

export default CardUser