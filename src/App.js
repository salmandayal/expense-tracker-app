import React from "react"
import "./App.css"
import Header from "./components/Header"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
import AddTrasaction from "./components/AddTrasaction"
import { GlobalContextProvider } from "./context/GlobalState"

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTrasaction />
      </div>
    </GlobalContextProvider>
  )
}

export default App
