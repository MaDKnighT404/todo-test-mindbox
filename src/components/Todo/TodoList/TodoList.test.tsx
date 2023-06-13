import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
/* eslint-disable @typescript-eslint/no-empty-function */
describe('TodoList', () => {
  it('should render the list of todos', () => {
    const todos = [
      { value: 'Todo 1', id: 1, isChecked: false },
      { value: 'Todo 2', id: 2, isChecked: true },
      { value: 'Todo 3', id: 3, isChecked: false },
    ];

    render(<TodoList todos={todos} setTodos={() => {}} />);
    const todoList = screen.getByTestId('todo-list');
    const todoItems = todoList.querySelectorAll('li');
    expect(todoItems).toHaveLength(todos.length);
  });

  it('should toggle the checked state of a todo when clicked', () => {
    const todos = [{ value: 'Todo 1', id: 1, isChecked: false }];
    render(<TodoList todos={todos} setTodos={() => {}} />);
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Todo 1');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(label);
    expect(checkbox).not.toBeChecked();
  });
});
