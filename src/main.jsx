import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/Home/index';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import themes from './styles/themes';
import { Expenses } from './templates/MonthyExpenses';
import { Accounts } from './templates/Accounts';
import { SignIn } from './templates/SignIn';
import { Calendary } from './components/Calendar';
import { CalendarPage } from './templates/CalendarPage';
import { CreditCard } from './templates/CreditCard';
import { Savings } from './templates/Savings';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyles/>
          <Savings/>
    </ThemeProvider>
  </React.StrictMode>,
)
