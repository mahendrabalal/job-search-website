import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import ThemeContext from './context/theme.context';
import { ContextWrapper } from './context/theme.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <ContextWrapper>
    <App />
    </ContextWrapper>
      
    </Router>
  </React.StrictMode>
);
