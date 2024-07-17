import "./DashBoard.css"
import { upload } from "../utils/config"
import { NavLink } from "react-router-dom"
const DashBoard = ({fotos}) => {
  console.log(fotos)

  return (
    <div className = "containerDashBoard">
      <section className = "recentpost">
          { fotos && fotos.map((foto) => (
                  <>
                    <img src = {`${upload}/photos/${foto.image}`} alt = {foto.title} className = "imgPost"/>
                    <div className = "actionfoto">
                      <button >editar</button>
                      <NavLink to = {`/delete/${foto._id}`}>
                        excluir
                      </NavLink>
                      <button>ver post</button>
                    </div>
                  </>
                ))
          }
      </section>
    </div>
  )
}

export default DashBoard