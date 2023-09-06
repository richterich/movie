import './global.postcss';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {App} from '~/app';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
