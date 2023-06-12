import styles from './Main.module.scss';
import TodoList from '../TodoList/TodoList';

const Main = () => {
  return (
    <div className={styles.main}>
      <TodoList />
    </div>
  );
};

export default Main;
