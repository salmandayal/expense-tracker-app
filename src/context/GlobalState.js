import React, { createContext, useReducer, useContext } from "react"
import AppReducer from "./AppReducer"
//Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
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
