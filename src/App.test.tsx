import { render, screen } from '@testing-library/react';

import App from './App';

describe('App render correct', () => {
  it('render Header, Main and Footer', () => {
    render(<App />);

    expect(screen.getByText('Todos')).toBeInTheDocument();
    expect(screen.getByText('Todo list is empty! Try added something')).toBeInTheDocument();
    expect(screen.getByText('Georgii Koloidi')).toBeInTheDocument();
  });

  
});
