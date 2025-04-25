import React from 'react'
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './css/index.css'
import Home from './views/Homepage/Home.tsx'
import App from './views/app.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
