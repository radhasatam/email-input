import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const app = render(<App />);

  const appElement = app.container.querySelector('#app');
  expect(appElement).toBeInTheDocument();
});
