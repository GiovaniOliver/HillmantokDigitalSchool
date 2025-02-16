import { createRoot } from 'react-dom/client';
import App from './src/App.web';
import './src/styles/globals.css';

// Create root element
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Create root
const root = createRoot(rootElement);

// Render app
root.render(<App />); 