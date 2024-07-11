import React from 'react'
import styles from '../DashBoard/DashBoard.module.css'
import { Link } from 'react-router-dom'

//import
import { useAuthValue } from '../../context/AuthContext' 
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'

const DashBoard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;
  const { documents: posts, loading } = useFetchDocuments('posts', null, uid);
  const { DeleteDocument } = useDeleteDocument("posts")
  
  //posts do usuario
  const deletedocument = (id) => {
    console.log("cliquei")
    DeleteDocument(id)
  }

  if (loading) {
    return <p>loading...</p>
  }

  return (
    <div className = {styles.dashboard}>
        <h2>DashBoard</h2>
        <p>Gerencie seus posts</p>
        {posts && posts.length === 0 ? (
          <div className = "styles.noposts">
            <p>Não foram encontrados posts</p>
            <Link to = "posts/create">criar seu primeiro post</Link>
          </div>
          ) : (
          <>
            <div className = {styles.postheader}>
              <span>Título</span>
              <span>Ações</span>
            </div>
            {posts && posts.map((post) => (
              <div key = {post.id} className = {styles.potrow}>
                <p>{post.title}</p>
                
                <div className = {styles.dashacoes}>
                  <Link to = {`/post/${post.id}`}>Ver</Link>
                  <Link to = {`/post/edit/${post.id}`}>editar</Link>
                  <button onClick = {() => deletedocument(post.id)}>excluir</button>
                </div>    
              </div>
            ))}
          </>)
        }
      
    </div>
  )
}

export default DashBoard