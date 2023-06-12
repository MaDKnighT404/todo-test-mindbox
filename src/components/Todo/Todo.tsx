import { useState } from 'react';
import styles from './Todo.module.scss';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Todo } from '../../types';

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className={styles.todo}>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList />
    </div>
  );
};

export default Todo;
