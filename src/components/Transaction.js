import React from "react"
import { useGlobalValue } from "../context/GlobalState"
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, ExpansionPanelActions, Divider, IconButton } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment'


const Transaction = ({ tx }) => {

  const { deleteTransaction } = useGlobalValue()

  const sign = tx.amount < 0 ? "-" : "+"
  let viewClass = sign === "-" ? "money minus" : "money plus"
  let m = moment(tx.date)
  return (
      <li >
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography className={viewClass} >{tx.text}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className='list_details'>
            <p>{tx.amount}$</p>
            <p>{m.fromNow()}</p>
            </div>
          </ExpansionPanelDetails>
          <Divider/>
          <ExpansionPanelActions>
          <IconButton
        onClick={() => deleteTransaction(tx.id)}
        color="secondary"
      >
        <DeleteIcon />
      </IconButton>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </li>
  )
}

export default Transaction
