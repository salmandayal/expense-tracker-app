import React, { useState } from "react"
import { useGlobalValue } from "../context/GlobalState"
import moment from 'moment'
//MUI Stuff
import { Button,Dialog, DialogTitle, DialogContent, TextField, Typography, DialogActions } from "@material-ui/core"
import SaveIcon from '@material-ui/icons/Save';

const AddTrasaction = () => {
  const { addTransaction } = useGlobalValue()
  const [amount, setAmount] = useState("")
  const [text, setText] = useState("")

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    const newTransaction = {
      id: Math.trunc(Math.random() * 10000000 + 1),
      amount: +amount,
      date:moment(),
      text,
    }
    addTransaction(newTransaction)
    handleClose()
  }

  return (
    <>
     <Button fullWidth startIcon={<SaveIcon/>} variant='contained' color="primary" onClick={handleClickOpen}>
        Add Transaction
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Transaction</DialogTitle>
        <form onSubmit={handleSubmit}>
        <DialogContent>
        <TextField
          fullWidth
          label="Details"
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder='Enter text...'
        />
          <TextField
            fullWidth
            label='Amount'
            type='number'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder='Enter amount...' />
          <Typography variant='subtitle2' color='secondary'>
            (negative - expense, positive - income)</Typography>
        </DialogContent>
        <DialogActions>
        <Button variant='contained' color='primary' type='submit'>
          Add
        </Button>
        <Button variant='contained' color='secondary' onClick={handleClose}>
          Cancel
        </Button>
        </DialogActions>
      </form>
      </Dialog>

    </>
  )
}

export default AddTrasaction
