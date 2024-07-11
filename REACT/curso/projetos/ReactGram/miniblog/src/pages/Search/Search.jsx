import React from 'react'
import styles from '../Search/Search.module.css'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import PostDetail from '../../components/PostDetail'
import { Link } from 'react-router-dom'

const Search = () => {
    const query = useQuery();
    //esse q é o nome da variavel que está sendo passada via url
    const search = query.get("q");
    const { documents: posts } = useFetchDocuments("posts", search);
    return (
        <div className = {styles.searchcontainer}>
            {console.log(posts)}
            <h2>Search</h2>
            <div>
                {posts && posts.length === 0 && (
                    <>
                        <p>Não foram encontrados posts com sua busca</p>
                        <Link to = "/">Voltar para home</Link>
                    </>
                )}
                {posts && posts.map((post) => (
                    <PostDetail
                    id={post.id}
                    link={post.image}
                    titulo={post.title}
                    tags={post.tags}
                    dono={post.createdBy}
              />))}
            </div>
        </div>
    )   
}

export default Search