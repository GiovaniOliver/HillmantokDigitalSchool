import { createRoot } from 'react-dom/client';
import App from './App.web';
import './styles/globals.css';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(<App />);