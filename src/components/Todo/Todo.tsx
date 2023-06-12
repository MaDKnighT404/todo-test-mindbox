import { useState } from 'react';
import styles from './Todo.module.scss';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { TodoObject } from '../../types';

const Todo = () => {
  const [todos, setTodos] = useState<TodoObject[]>([]);

  return (
    <div className={styles.todo}>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
