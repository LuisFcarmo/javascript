import React, { useState } from 'react';
import styles from '../Home/Home.module.css';
import { Link } from 'react-router-dom';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import PostDetail from '../../components/PostDetail';
import Footer from '../../components/Footer';

const Home = () => {
  const [query, setQuery] = useState('');
  const { documents: posts, loading } = useFetchDocuments('posts');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Query:', query);
    // Lógica de pesquisa ou filtragem aqui
  };

  return (
    <div className={styles.ContainerHome}>
      <div className={styles.MainContent}>
        
        <section className = {styles.sectionBarradePesquisa}>
          <h1 className={styles.TitleHome}>Veja os nossos posts mais recentes</h1>
          <form onSubmit={handleSubmit} className={styles.FormHome}>
            <input
              type="text"
              placeholder="Ou busque por tags"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.textmoderno}
            />
            <button type="submit" className={styles.btnpesquisar}>
              Pesquisar
            </button>
          </form>
        </section>

        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="posts/create">Seja o primeiro a publicar</Link>
          </div>
        )}
        <section className = {styles.sectionpost}>
          {posts && posts.map((post) => (
              <PostDetail
                key={post.id}
                link={post.image}
                titulo={post.title}
                conteudo={post.body}
                tags={post.tags}
                dono={post.createdBy}
              />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
