import React from "react"
import { useGlobalValue } from "../context/GlobalState"

const Balance = () => {
  const { transactions } = useGlobalValue()
  let balAmounts = transactions.map(tx => tx.amount)

  let balance =
    balAmounts.length > 0
      ? balAmounts.reduce((accu, curr) => accu + curr).toFixed(2)
      : 0

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  )
}

export default Balance
