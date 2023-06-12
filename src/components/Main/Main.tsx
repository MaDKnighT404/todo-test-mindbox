import styles from './Main.module.scss';
import Todo from '../Todo';

const Main = () => {
  return (
    <div className={styles.main}>
      <Todo />
    </div>
  );
};

export default Main;
