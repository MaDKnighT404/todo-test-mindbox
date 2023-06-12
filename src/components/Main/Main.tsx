import styles from './Main.module.scss';
import Todo from '../Todo';

const Main = () => {
  return (
    <main className={styles.main}>
      <Todo />
    </main>
  );
};

export default Main;
