import React from "react";
import ReactDOM, { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';



const root = createRoot(document.getElementById('root'));
root.render(
      <App />
);