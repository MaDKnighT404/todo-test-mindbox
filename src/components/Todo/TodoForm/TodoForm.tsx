import { FC, ChangeEvent, FormEvent, useState } from 'react';
import { TodoObject } from '../../../types';
import styles from './TodoForm.module.scss';

interface TodoFormProps {
  todos: TodoObject[];
  setTodos: (todos: TodoObject[]) => void;
}

const TodoForm: FC<TodoFormProps> = ({ todos, setTodos }) => {
  const [input, setInput] = useState('');
  const [id, setId] = useState(1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    const newTodo = {
      value: input,
      id,
      isChecked: false,
    };
    setTodos([...todos, newTodo]);

    setInput('');
    setId((prevCount) => prevCount + 1);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form className={styles.todo__form} onSubmit={handleSubmit} data-testid="todo-form">
      <input
        className={styles.todo__input}
        type="text"
        name="text"
        value={input}
        placeholder="What's need to be done?"
        onChange={handleInputChange}
      />
    </form>
  );
};

export default TodoForm;
