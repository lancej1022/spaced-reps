/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/reset.css';
import App from './App';

render(() => <App />, document.querySelector('body') as HTMLElement);
