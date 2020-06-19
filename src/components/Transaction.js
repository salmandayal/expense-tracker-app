import React from "react"
import { useGlobalValue } from "../context/GlobalState"

const Transaction = ({ tx }) => {
  const { deleteTransaction } = useGlobalValue()

  const sign = tx.amount < 0 ? "-" : "+"
  let viewClass = sign === "-" ? "money minus" : "money plus"
  return (
    <div>
      <li className={viewClass}>
        {tx.text}
        <span>
          {sign}${Math.abs(tx.amount)}
        </span>
        <button onClick={() => deleteTransaction(tx.id)} className='delete-btn'>
          x
        </button>
      </li>
    </div>
  )
}

export default Transaction
