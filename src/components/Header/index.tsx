import styles from './styles.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

interface HeaderProps {
  isHomePage?: boolean;
}

export const Header = ({isHomePage}: HeaderProps) => {
  return (
    <header className={clsx(styles.header, isHomePage && styles.homePage)}>
      <Image src="/images/forma-front-logo.png" alt="CSS Pro" width={220} height={40}/>
      <Image src="/images/logo-dev-ajuda.png" alt="DevAjuda" width={189} height={79}/>
    </header>
  )
}