import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList/';


/* eslint-disable @typescript-eslint/no-empty-function */
describe('TodoOption', () => {
  it('should hide completed todos when "active" button is clicked', () => {
    const todos = [
      { value: 'Todo 1', id: 1, isChecked: false },
      { value: 'Todo 2', id: 2, isChecked: false },
      { value: 'Todo 3', id: 3, isChecked: true },
    ];

    render(<TodoList todos={todos} setTodos={() => {}} />);
    const activeButton = screen.getByTestId('active-btn');
    fireEvent.click(activeButton);
    const todoList = screen.getByTestId('todo-list');
    const todoItems = todoList.querySelectorAll('li');
    expect(todoItems[2].className).toContain('todolist__item_hide');
  });

  it('should hide active todos when "completed" button is clicked', () => {
    const todos = [
      { value: 'Todo 1', id: 1, isChecked: true },
      { value: 'Todo 2', id: 2, isChecked: true },
      { value: 'Todo 3', id: 3, isChecked: false },
    ];
    render(<TodoList todos={todos} setTodos={() => {}} />);
    const completedButton = screen.getByTestId('completed-btn');
    fireEvent.click(completedButton);
    const todoList = screen.getByTestId('todo-list');
    const todoItems = todoList.querySelectorAll('li');
    expect(todoItems[2].className).toContain('todolist__item_hide');
  });

  it('should hide active todos when "completed" button is clicked', () => {
    const todos = [
      { value: 'Todo 1', id: 1, isChecked: true },
      { value: 'Todo 2', id: 2, isChecked: true },
      { value: 'Todo 3', id: 3, isChecked: false },
      { value: 'Todo 4', id: 4, isChecked: false },
    ];
    render(<TodoList todos={todos} setTodos={() => {}} />);
    const clearButton = screen.getByTestId('clear-btn');
    fireEvent.click(clearButton);
    expect(screen.getByText('Todo 3')).toBeInTheDocument();
    expect(screen.getByText('Todo 4')).toBeInTheDocument();
  });
});
