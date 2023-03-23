import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import banner from './banner.png';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
    <Header />
    <main>
    <section className={styles.principal}>
    <Menu />
    <div className={styles.principal__imagem}>
      <h1>A galeria mais completa do espaço.</h1>
      <img src={banner} alt='A imagem da terra'/>
    </div>

    </section>

    </main>
 

    </>


  )
}

export default Home;