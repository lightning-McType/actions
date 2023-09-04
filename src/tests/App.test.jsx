import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('Renders main page correctly', () => {
	afterEach(() => {
		cleanup();
	});
	it('should render the main page correctly', () => {
		render(<App />);
		const h1 = screen.queryByText('Vite + React');

		expect(h1).toBeInTheDocument();
	});

	it('should show the button count set to 0', () => {
		render(<App />);
		const button = screen.queryByText('count is 0');
		expect(button).toBeInTheDocument();
	});

	it('should show the button count set to 3', async () => {
		const user = userEvent.setup();
		render(<App />);
		const button = screen.queryByText('count is 0');
		expect(button).toBeInTheDocument();

		await user.click(button);
		await user.click(button);
		await user.click(button);

		expect(button?.innerHTML).toBe('count is 3');
	});
});
