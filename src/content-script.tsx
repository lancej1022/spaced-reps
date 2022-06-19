/* @refresh reload */
import { render } from 'solid-js/web';
// import { Router } from 'solid-app-router';

import './styles/reset.css';
import App from './App';

render(
  () => (
    // <Router>
    <App />
    // </Router>
  ),
  document.querySelector('body') as HTMLElement
);
