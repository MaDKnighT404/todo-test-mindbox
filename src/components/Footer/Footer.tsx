import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h4 className={styles.footer__title}>
          <a href="https://github.com/MaDKnighT404">Georgii Koloidi</a> || Battleaxe@bk.ru || +7 918
          204 28 88
        </h4>
    </footer>
  );
};

export default Footer;
