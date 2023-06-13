import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';
import TodoList from '../TodoList';

/* eslint-disable @typescript-eslint/no-empty-function */
describe('TodoForm', () => {
  it('renders input field with correct placeholder', () => {
    render(<TodoForm todos={[]} setTodos={() => {}} />);
    const inputElement = screen.getByPlaceholderText("What's need to be done?");
    expect(inputElement).toBeInTheDocument();
  });

  it('updates input value when typing', () => {
    render(<TodoForm todos={[]} setTodos={() => {}} />);
    const inputElement = screen.getByPlaceholderText("What's need to be done?") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    expect(inputElement.value).toBe('New Todo');
  });

  it('resets input value after form submission', () => {
    render(<TodoForm todos={[]} setTodos={() => {}} />);
    const inputElement = screen.getByPlaceholderText("What's need to be done?") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.submit(screen.getByTestId('todo-form'));
    expect(inputElement.value).toBe('');
  });

  it('should not add a new todo when submitting the form with an empty input', () => {
    render(
      <>
        <TodoForm todos={[]} setTodos={() => {}} />
        <TodoList todos={[]} setTodos={() => {}} />
      </>
    );
    const inputElement = screen.getByPlaceholderText("What's need to be done?") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: '' } });
    fireEvent.submit(screen.getByTestId('todo-form'));
    expect(screen.getByText('Todo list is empty! Try added something')).toBeInTheDocument();
  });
});
