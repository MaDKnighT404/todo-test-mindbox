import { FC } from 'react';
import { TodoObject } from '../../../types';
import styles from './TodoOptions.module.scss';

interface TodoOptionsProps {
  todos: TodoObject[];
}

const TodoOptions: FC<TodoOptionsProps> = ({ todos }) => {

  return <>
    {todos.length >= 1 && <div className={styles.todo__options}>
      <div className={styles['todo__items-left']}>0 items left</div>
      <ul className={styles['sort-menu']}>
      <button className={`${styles['sort-menu__btn']} ${styles['sort-menu__btn-active']}`}>All</button>
        <li className={styles['sort-menu__item']}><button className={styles['sort-menu__btn']}>Active</button></li>
        <li className={styles['sort-menu__item']}><button className={styles['sort-menu__btn']}>Completed</button></li>
      </ul>
      <button className={styles['todo__clear-btn']}>Clear completed</button>
    </div>}
  </>;
};

export default TodoOptions;
