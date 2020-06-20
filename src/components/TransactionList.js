import React from "react"
import { useGlobalValue } from "../context/GlobalState"
import Transaction from "./Transaction"
import { Typography } from "@material-ui/core"

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
      <Typography variant='h5' align='center'>History</Typography>
      <Typography align='center' variant='subtitle2' color='textSecondary'>Tap to expand transaction</Typography>
      <ul className='list'>{list}</ul>
    </>
  )
}

export default TransactionList
