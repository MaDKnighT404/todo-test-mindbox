import styles from './TodoForm.module.scss';

const TodoForm = () => {
  return (
    <form className={styles.todo__form}>
      <input
        className={styles.todo__input}
        type="text"
        name="text"
        placeholder="What's need to be done?"
      />
    </form>
  );
};

export default TodoForm;
