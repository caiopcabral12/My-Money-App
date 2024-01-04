import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/Home/index';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import themes from './styles/themes';
import { Routes } from '../service/api';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyles/>
          <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
)
