import React from 'react';
import styles from './PostDetail.module.css';
import { Link } from 'react-router-dom';
const PostDetail = ({ link, titulo, tags, dono, id }) => {
  return (
    <div className={styles['post-detail-container']}>
        <h4>{titulo}</h4>
        <img src={link} alt="Imagem do post" className={styles['post-image']} />
        <ul className={styles['tag-list']}>
            {tags.map((tag, index) => (
            <li key={index} className={styles['tag-list-item']}>
                <span>#</span>
                {tag}
            </li>
            ))}
        </ul>
        <h4 className={styles['post-author']}>Publicado por {dono}</h4>
        <Link to = {`/post/${id}`}>Ler</Link>
    </div>
  );
};

export default PostDetail;
