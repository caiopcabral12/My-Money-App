import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import themes from './styles/themes';
import { AppRoutes } from './Routes/app.routes';
import { Routes } from './Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyles/>
          <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
)
