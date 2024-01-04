import { Routes, Route } from "react-router-dom";

import { Home } from '../templates/Home'
import { Accounts } from '../templates/Accounts'
import { CalendarPage } from '../templates/CalendarPage'
import { CreditCard } from '../templates/CreditCard'
import { Expenses } from '../templates/MonthyExpenses'
import { Savings } from '../templates/Savings'

export function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Accounts" element={<Accounts/>}/>
            <Route path="/CalendarPGE" element={<CalendarPage/>}/>
            <Route path="/CreditCard" element={<CreditCard/>}/>
            <Route path="/Expenses" element={<Expenses/>}/>
            <Route path="/Savings" element={<Savings/>}/>
        </Routes>
    )
};