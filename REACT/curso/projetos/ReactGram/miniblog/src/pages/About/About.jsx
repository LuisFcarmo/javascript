import React from 'react'
//CSS
import styles from '../About/About.module.css'

const About = () => {
  return (
    <div>
        <h2>Sobre Mine <span>Blog</span></h2>
        <p>
          <span>frontend</span><br/>
          React: Utilizado para construir a interface do usuário de maneira eficiente e modular, facilitando a criação de componentes reutilizáveis.<br/>
          React Router: Para gerenciar a navegação entre as páginas da aplicação. <br/>
          CSS Modules: Para estilização, garantindo escopo local para os estilos e evitando conflitos de nomes.<br/>
          Axios: Para fazer requisições HTTP (opcional, dependendo da necessidade de chamadas externas à API do Firebase).<br/>
        </p>
        <p>
          <span>Backend</span><br/>
          Firebase Authentication: Para gerenciar a autenticação de usuários, permitindo login e registro de forma segura.<br/>
          Firebase Firestore: Um banco de dados NoSQL utilizado para armazenar os posts e informações dos usuários.<br/>
        </p>
    </div>
  )
}

export default About