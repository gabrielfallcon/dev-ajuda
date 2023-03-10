import styles from './styles.module.scss';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import router from 'next/router';
import { FiChevronUp } from 'react-icons/fi';
import clsx from 'clsx';

interface FooterProps {
  isHomePage?: boolean;
}

const Footer = ({ isHomePage }:  FooterProps) => {
  const onClickSocial = (url: string) => {
    router.push(url);
  }
  return (
    <footer className={styles.footer}>

      <div className={clsx(styles.contentDefault,  isHomePage && styles.footerHome)}>
        {isHomePage &&(
          <img 
            src="/images/logo-dev-ajuda.png" 
            alt="logo" 
            className={styles.imgFooter}  
          />
        )}

        <div className={styles.contentSocial}>
          <div className={styles.boxSocial}>
            <FaInstagram size={27} color="#0D0F10" onClick={() => onClickSocial('https://www.instagram.com/devajuda/')}/>
          </div>
          <div className={styles.boxSocial} onClick={() => onClickSocial('https://www.youtube.com/@devajuda')}>
            <FaYoutube size={27} color="#0D0F10"/>
          </div>
        </div>
        
        {isHomePage && (
          <div className={styles.boxBackStart}>
            <FiChevronUp size={28} color="#00FF0A"/>

            <a href="#onboading">Voltar ao topo</a>
          </div>
        )}
      </div>

      {isHomePage && (
        <div className={clsx(styles.boxBackStart, styles.contentMobile)}>
          <FiChevronUp size={28} color="#00FF0A"/>

          <a href="#onboading">Voltar ao topo</a>
        </div>
      )}
    </footer>
  )
}

export default Footer;