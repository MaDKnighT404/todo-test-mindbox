import { FC } from 'react';
import { TodoElement } from '../../../types';
import styles from './TodoList.module.scss';

interface TodoListProps {
  todos: TodoElement[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div className={styles.todolist}>
      <ul>
        {todos.map((el, i) => (
          <li className={styles.todolist__item}>
            <input
              className={styles.todolist__checkbox}
              type="checkbox"
              id={`customCheckbox${i + 1}`}
            />
            <label className={styles.todolist__label} htmlFor={`customCheckbox${i + 1}`}>
              <span> {el.value}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
