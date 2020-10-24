import React from "react";
import "./App.css";

import NewTransaction from "./components/NewTransaction";
import TransactionsList from "./components/TransactionsList";

import { GlobalProvider } from "./context/GlobalContext";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import Header from "./components/Header";

function App() {
  return (
    <GlobalProvider>

      <Header />
      <div className="App">
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
