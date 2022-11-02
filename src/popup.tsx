/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import './styles/reset.css';
import App from './App';

const queryClient = new QueryClient();

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  ),
  document.querySelector('#root') as HTMLElement
);
