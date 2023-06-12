import { useState } from 'react';
import styles from './Todo.module.scss';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { TodoElement } from '../../types';

const Todo = () => {
  const [todos, setTodos] = useState<TodoElement[]>([]);

  return (
    <div className={styles.todo}>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
