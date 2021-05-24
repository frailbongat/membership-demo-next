import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href='/'>getStaticProps</Link>
        </li>
        <li>
          <Link href='/serverside'>getServerSideProps</Link>
        </li>
        <li>
          <Link href='/staticpath'>getStaticProps + getStaticPaths</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
