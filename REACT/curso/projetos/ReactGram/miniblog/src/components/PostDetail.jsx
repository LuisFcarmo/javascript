import React from 'react';
import styles from './PostDetail.module.css';

const PostDetail = ({ link, titulo, conteudo, tags, dono }) => {
  return (
    <div className={styles['post-detail-container']}>
        <h4>{titulo}</h4>
        <img src={link} alt="Imagem do post" className={styles['post-image']} />
        <p>{conteudo}</p>
        <ul className={styles['tag-list']}>
            {tags.map((tag, index) => (
            <li key={index} className={styles['tag-list-item']}>
                <span>#</span>
                {tag}
            </li>
            ))}
        </ul>
        <h4 className={styles['post-author']}>Publicado por {dono}</h4>
    </div>
  );
};

export default PostDetail;
