import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Add RouterProvider import
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter ([
  {
    path: '/',
    element:<App/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)