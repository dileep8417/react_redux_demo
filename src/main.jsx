import ReactDom from 'react-dom/client';
import React from 'react';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);