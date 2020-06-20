import React from "react"
import { useGlobalValue } from "../context/GlobalState"

const IncomeExpenses = () => {
  const { transactions } = useGlobalValue()

  const incAmounts = transactions.map(tx => tx.amount).filter(amt => amt > 0)
  const expAmounts = transactions.map(tx => tx.amount).filter(amt => amt < 0)

  let income =
    incAmounts.length > 0 ? incAmounts.reduce((accu, curr) => accu + curr) : 0
  let expense =
    expAmounts.length > 0 ? expAmounts.reduce((accu, curr) => accu + curr) : 0

  return (
    <div className='inc-exp-container'>

          <h4 style={{backgroundColor:'#1abe5e',color:"white"}}>Income</h4>
          <p className='money plus'>+${income}</p>

        <h4 style={{backgroundColor:'#c85649',color:"white"}}>Expense</h4>
        <p className='money minus'>-${Math.abs(expense)}</p>

    </div>
  )
}

export default IncomeExpenses
