// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenVault/i);
    expect(titleElement).toBeInTheDocument();
});
