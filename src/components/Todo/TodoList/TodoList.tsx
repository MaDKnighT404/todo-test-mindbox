import { FC } from 'react';
import TodoOptions from '../TodoOptions';
import { TodoObject } from '../../../types';
import styles from './TodoList.module.scss';

interface TodoListProps {
  todos: TodoObject[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div className={styles.todolist}>
      <ul>
        {todos.map((el, i) => (
          <li className={styles.todolist__item} key={el.id}>
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
      <TodoOptions todos={todos} />
    </div>
  );
};

export default TodoList;
