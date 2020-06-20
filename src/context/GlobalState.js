import React, { createContext, useReducer, useContext } from "react"
import AppReducer from "./AppReducer"
//Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Groceries", amount: -20, date: "06/19/20"},
    { id: 2, text: "Laptop", amount: 300 ,date: "06/19/20"},
    { id: 3, text: "Rent", amount: -10 ,date: "06/19/20"},
  ],
}

//Create context
export const GlobalContext = createContext(initialState)

//Create context provider
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //Actions
  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    })
  }
  const addTransaction = transaction => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    })
  }

  //inorder to use actions we have to pass it down in provider
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalValue = () => useContext(GlobalContext)
