import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component correctly', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
  });

  test('adds a new todo when the form is submitted', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo between completed and not completed', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    
    // Initially, the text should not be struck through
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    // After clicking, it should be struck through (completed)
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    // After clicking again, it should not be struck through (not completed)
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo when the delete button is clicked', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];
    
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
