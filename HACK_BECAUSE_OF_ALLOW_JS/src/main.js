import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'; // Include your CSS file if needed, adjust path if necessary
// Rendering the App component to the root element in index.html
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
        <App />
    </React.StrictMode>);
