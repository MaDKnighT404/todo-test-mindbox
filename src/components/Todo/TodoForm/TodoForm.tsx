import { FC, ChangeEvent, FormEvent, useState } from 'react';
import { TodoElement } from '../../../types';
import styles from './TodoForm.module.scss';

interface TodoFormProps {
  todos: TodoElement[];
  setTodos: (todos: TodoElement[]) => void;
}

const TodoForm: FC<TodoFormProps> = ({ todos, setTodos }) => {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    const newTodo = {
      value: input,
      id: count,
      isChecked: false,
    };
    setTodos([...todos, newTodo]);

    setInput('');
    setCount((prevCount) => prevCount + 1);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form className={styles.todo__form} onSubmit={handleSubmit}>
      <input
        className={styles.todo__input}
        type="text"
        name="text"
        value={input}
        placeholder="type your task here!"
        onChange={handleInputChange}
      />
      <button className="todo__submit">Add todo</button>
    </form>
  );
};

export default TodoForm;
