import React from 'react';
import open from './open.png';
import favorito from './favorito.png';


const Cards = ({fotos, styles}) => {
  return (

    <ul className={styles.galeria__cards}>
        {fotos.map((foto) => {
          return (
            <li key={foto.id} className={styles.galeria__card}>
              <img
                className={styles.galeria__imagem}
                src={foto.imagem}
                alt={foto.titulo}
              />

              <p className={styles.galeria__descricao}>{foto.titulo} </p>
              <div>
                <p> {foto.creditos}</p>
                <span>
                  <img src={favorito} alt="ícone curtir" />
                  <img src={open} alt="ícone modal" />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    
  )
}

export default Cards;