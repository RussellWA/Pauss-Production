import React from 'react'
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './css/index.css'
import App from './pages/App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
