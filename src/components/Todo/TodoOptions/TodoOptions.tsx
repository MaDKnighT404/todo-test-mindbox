import { FC } from 'react';
import { TodoObject } from '../../../types';
import styles from './TodoOptions.module.scss';

interface TodoOptionsProps {
  todos: TodoObject[];
  activeButton: string;
  setActiveButton: (button: string) => void;
  setTodos: (todos: TodoObject[]) => void;
}

const TodoOptions: FC<TodoOptionsProps> = ({ todos, setTodos, activeButton, setActiveButton }) => {
  const itemsLeft = todos.filter((el) => !el.isChecked).length;

  const handleClearItems = () => {
    const clearedTodos = todos.filter((el) => !el.isChecked);
    setTodos(clearedTodos);
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className={styles.todo__options}>
      <div className={styles['todo__items-left']}>{itemsLeft} items left</div>
      <ul className={styles['sort-menu']}>
        <button
          className={`${styles['sort-menu__btn']} ${
            activeButton === 'all' && styles['sort-menu__btn_active']
            }`}
          onClick={() => handleButtonClick('all')}
          data-testid='all-btn'
        >
          All
        </button>
        <li className={styles['sort-menu__item']}>
          <button
            className={`${styles['sort-menu__btn']} ${
              activeButton === 'active' && styles['sort-menu__btn_active']
            }`}
            onClick={() => handleButtonClick('active')}
            data-testid='active-btn'
          >
            Active
          </button>
        </li>
        <li className={styles['sort-menu__item']}>
          <button
            className={`${styles['sort-menu__btn']} ${
              activeButton === 'completed' && styles['sort-menu__btn_active']
            }`}
            onClick={() => handleButtonClick('completed')}
            data-testid='completed-btn'
          >
            Completed
          </button>
        </li>
      </ul>
      <button className={styles['todo__clear-btn']} onClick={handleClearItems} data-testid='clear-btn'>
        Clear completed
      </button>
    </div>
  );
};

export default TodoOptions;
