import React from 'react'
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './css/index.css'
import Home from './views/Homepage/Home.tsx'

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <StrictMode>
        <Home/>
    </StrictMode>
);
