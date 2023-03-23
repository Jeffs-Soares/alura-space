import banner from './banner.png';
import styles from './Home.module.scss';

import Footer from '../Footer/Footer';
import Galeria  from '../Galeria/Galeria';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Populares from '../Populares/Populares';

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
    <div className={styles.galeria}>
      <Galeria />
      <Populares />
    </div>
    </main>


    <Footer />
 
    </>


  )
}

export default Home;