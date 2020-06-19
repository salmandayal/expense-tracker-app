import React, { useState } from "react"
import { useGlobalValue } from "../context/GlobalState"

const AddTrasaction = () => {
  const { addTransaction } = useGlobalValue()
  const [amount, setAmount] = useState(0)
  const [text, setText] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    const newTransaction = {
      id: Math.trunc(Math.random() * 10000000 + 1),
      amount: +amount,
      text,
    }
    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button type='submit' className='btn'>
          Add transaction
        </button>
      </form>
    </>
  )
}

export default AddTrasaction
