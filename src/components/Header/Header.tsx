import styles from './Header.module.scss';

const Header = () => {

  return (
    <header className={styles.header}>
      <div className="header__content">
        <div className={styles.header__wrapper}>
          <h1 className={styles.header__title}>Todos</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
