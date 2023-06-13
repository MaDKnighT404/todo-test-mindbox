import { FC, useState } from 'react';
import TodoOptions from '../TodoOptions';
import { TodoObject } from '../../../types';
import styles from './TodoList.module.scss';

interface TodoListProps {
  todos: TodoObject[];
  setTodos: (todos: TodoObject[]) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, setTodos }) => {
  const [activeButton, setActiveButton] = useState('all');

  const handleToggleChecked = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isChecked: !todo.isChecked };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className={styles.todolist}>
      <ul>
        {todos.length >= 1 ? (
          todos.map((el, i) => (
            <li
              className={`${styles.todolist__item} ${
                ((activeButton === 'active' && el.isChecked) ||
                  (activeButton === 'completed' && !el.isChecked)) &&
                styles.todolist__item_hide
              }`}
              key={el.id}
            >
              <input
                className={styles.todolist__checkbox}
                type="checkbox"
                defaultChecked={el.isChecked}
                id={`customCheckbox${i + 1}`}
              />
              <label
                className={styles.todolist__label}
                htmlFor={`customCheckbox${i + 1}`}
                onClick={() => handleToggleChecked(el.id)}
              >
                <span> {el.value}</span>
              </label>
            </li>
          ))
        ) : (
          <li className={styles.todolist__item_empty}>Todo list is empty! Try added something </li>
        )}
      </ul>
      <TodoOptions
        todos={todos}
        setTodos={setTodos}
        setActiveButton={setActiveButton}
        activeButton={activeButton}
      />
    </div>
  );
};

export default TodoList;
