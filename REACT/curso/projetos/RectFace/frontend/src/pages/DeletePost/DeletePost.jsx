import { useParams } from "react-router-dom";
import "./DeletePost.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetFotoById } from "../../slices/FotoSlice"; // Certifique-se de importar a ação corretamente
import { upload } from "../../utils/config";

//components
import CardUser from "../../component/CardUser";


const DeletePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { foto, error, loading, message } = useSelector((state) => state.foto);
    
    useEffect(() => {
      dispatch(GetFotoById(id));

    }, [dispatch, id]);

  const mostrar = () => {
    let DivVerMais = document.getElementById("VerMais")
    let btn = document.querySelector(".show-more-button")

    console.log(DivVerMais)
    if(DivVerMais.hasAttribute("hidden")) {
        DivVerMais.removeAttribute("hidden")
        btn.innerHTML = "ver menos"
    } else {
      DivVerMais.setAttribute("hidden", "")
      btn.innerHTML = "ver mais"
    }
  }
  console.log(foto)
  return (
    <div className="container">
        { foto &&
            <>
                <p className = "post-title">{loading ? "Carregando..." : foto.title}</p>
                <img src= {`${upload}/photos/${foto.image}`} alt="" className="post-image" />
                <p className = "titleComent">Comentarios</p>
                <button onClick = {() => mostrar()} className = "show-more-button">ver mais</button>
                {foto.likes && <p>likes {foto.likes.length}</p>} 
                <div id = "VerMais" hidden> 
                    {foto.coments && foto.coments.map((user) => (
                        <CardUser 
                            userName = {user.userName} 
                            coment = {user.coment}
                            userImage = {user.userImage}
                            />
                    ))}
                </div>
                <button className = "delete-button ">Deletar post</button>
            </>
        }
      {error && <p>Erro: {error}</p>}
    </div>
  );
};

export default DeletePost;