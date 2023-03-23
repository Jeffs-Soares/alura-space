import styles from './Footer.module.scss';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';


const Footer = () => {
  return (
    <footer className={styles.rodape}>
    <div className={styles.rodape__icones}>
      <a
        href="https://www.facebook.com/AluraCursosOnline/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="ícone do facebook" />
      </a>
      <a
        href="https://twitter.com/aluraonline?lang=en"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitter} alt="ícone do twitter" />
      </a>
      <a
        href="https://www.instagram.com/aluraonline/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="ícone do instagram" />
      </a>
    </div>
    <p>Desenvolvido por Jeff</p>
  </footer>
  )
}

export default Footer;