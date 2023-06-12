import styles from './Todo.module.scss';
import TodoForm from './TodoForm';

const Todo = () => {
  return <div className={styles.todo}><TodoForm /></div>;
};

export default Todo;
