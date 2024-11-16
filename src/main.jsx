import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Add RouterProvider import
import App from './App.jsx';
import './index.css';
import CreateTrip from './create-trip/index.jsx';
import Header from './components/ui/custom/Header.jsx';

const router = createBrowserRouter ([
  {
    path: '/',
    element:<App/>
  },
  {
    path: '/create-trip',
    element:<CreateTrip/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header/>
  <RouterProvider router={router}/>
  </StrictMode>,
)
