import React from "react"
import moment from 'moment'
import { useGlobalValue } from "../context/GlobalState"
//MUI Stuff
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, ExpansionPanelActions, Divider, IconButton } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';

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
          <div style={{position:'relative',marginBottom:'16px'}}>
          <ExpansionPanelDetails>
            <p style={{position:'absolute',top:0,left:"10%"}}>{tx.amount}$</p>
            <p style={{position:'absolute',top:0,right:0}}>{m.fromNow()}</p>
          </ExpansionPanelDetails>
          </div>
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
