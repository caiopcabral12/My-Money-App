import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/Home/index';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import themes from './styles/themes';
import { Expenses } from './templates/MonthyExpenses';
import { AccountsPayable } from './templates/AccountsPayable';
import { SignIn } from './templates/SignIn';
import { Calendary } from './components/Calendar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyles/>
          <Calendary/>
    </ThemeProvider>
  </React.StrictMode>,
)
