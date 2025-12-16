import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './style/style.css';
import './style/main.css';
import './style/clock.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </React.StrictMode>
);
