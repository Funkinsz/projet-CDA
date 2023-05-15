import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/index.scss"
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from "./router/router"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
