import React from "react"
import { useGlobalValue } from "../context/GlobalState"
import CountUp from 'react-countup'
const Balance = () => {
  const { transactions } = useGlobalValue()
  let balAmounts = transactions.map(tx => tx.amount)

  let balance =
    balAmounts.length > 0
      ? balAmounts.reduce((accu, curr) => accu + curr).toFixed(2)
      : 0

  return (
  <div className='current_Balance'>
      <h4>Your Balance</h4>
      <h2>
        <CountUp
          start='00.00'
          end={balance}
          duration={2.5}
          separator=" "
          decimals={2}
          prefix="$ "/>
      </h2>
    </div>
  )
}

export default Balance
