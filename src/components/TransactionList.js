import React from "react"
import { useGlobalValue } from "../context/GlobalState"
import Transaction from "./Transaction"

const TransactionList = () => {
  const { transactions } = useGlobalValue()
  let list =
    transactions.length > 0 ? (
      transactions.map(tx => {
        return <Transaction key={tx.id} tx={tx} />
      })
    ) : (
      <li style={{ color: "red" }}>No transactions yet</li>
    )
  return (
    <>
      <h3>History</h3>
      <ul className='list'>{list}</ul>
    </>
  )
}

export default TransactionList
