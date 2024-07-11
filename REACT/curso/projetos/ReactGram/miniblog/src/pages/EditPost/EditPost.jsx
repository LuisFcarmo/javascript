import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../EditPost/EditPost.module.css';
import { useAuthValue } from '../../context/AuthContext';
import Error from '../../components/Error';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id)
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [errorPost, setErrorPost] = useState("");
  const { UpdateDocument, response } = useUpdateDocument("posts")
  const { user } = useAuthValue();
  const  navigate = useNavigate();
  
  useEffect (() => {
    if (post) {
        setTitle(post.title);
        setBody(post.body);
        setImage(post.image);
        const texttags = post.tags.join(", ");
        setTags(texttags);
    }
  }, [post])


  const validations = () => {
    if (title.trim() === "" || title === undefined) {
      setErrorPost("Campo titulo não pode estar vazio");
      return false;
    }
    if (image.trim() === "" || image === undefined) {
      setErrorPost("A Url da imagem deve ser informada para criar um post");
      return false;
    }
    if (body.trim() === "" || body === undefined) {
      setErrorPost("O conteudo do post deve ser informado");
      return false;
    }
    if (tags.trim() === "" || tags === undefined) {
      setErrorPost("As tags do post devem ser informadas");
      return false;
    }
    const aux = tags.split(',');      
    for (let i = 0; i < aux.length; i++) {
      if (aux[i].trim() === "" || aux[i].length <= 1) {
        setErrorPost("Uma das tags informadas está vazia ou não tem o tamanho minimo de 2 caracteres");
        return false;
      }
    }
    return true;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorPost("");
    
    if (validations()) {
      const newpost = {
        title: title,
        image: image,
        body: body,
        tags: tags.split(',').map(tag => tag.trim().toLowerCase()), // ensure tags are trimmed
        uid: user.uid,
        createdBy: user.displayName 
      };

      UpdateDocument(id, newpost);

      if (!response.error) {
        navigate('/'); // redirect to posts or any other desired route
      } else{ 
         navigate("/dashboard")
      }
    }
  }

  return (
    <div className={styles.post}>
      {post && (
        <>
        {errorPost && <Error ErrorMessage={errorPost} />}
        <h2>Editando post: {post.title}</h2>
        <p>Altere os dados do post como desejar</p>
        <form className={styles.FormsPost} onSubmit={handleSubmit}>
            <label className={styles.FormLabel}>
            <span>titulo:</span>
            <input 
                type="text" 
                name="TxtName" 
                required 
                placeholder='Nome do usuario' 
                className={styles.FormInput}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </label>
            <label className={styles.FormLabel}>
            <span>URL da imagem:</span>
            <input 
                type="text" 
                name="TxTUrl"
                required 
                placeholder="insira a URL da imagem"
                className={styles.FormInput}
                value={image}
                onChange={(e) => setImage(e.target.value)}            
            />
            </label>
            <p>Preview da imagem atual:</p>
            <img src = {post.image} className= {styles.postimage} alt = {post.title}/>
            <label className={styles.FormLabel}>
            <span>Conteudo:</span>
            <textarea
                name='body'
                required
                className={styles.FormInput}
                placeholder='Insira o conteúdo do post'
                onChange={e => setBody(e.target.value)}
                value={body}
            />
            </label>
            <label className={styles.FormLabel}>
            <span>Tags:</span>
            <input
                type="text"
                name="tagstxt"
                required 
                placeholder="insira as tags separadas por virgula"
                className={styles.FormInput}
                value={tags}
                onChange={(e) => setTags(e.target.value)}  
            />
            </label>
            {!response.loading && <button className= {styles.FormButton}>Confirmar</button>}
            {response.loading && <button className= {styles.FormButton} disabled>Aguarde...</button>}    
        </form>     
        </>
      )}
    </div>
  );
}

export default EditPost;
