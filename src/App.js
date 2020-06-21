import React from "react"
import "./App.css"
import Header from "./components/Header"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
import AddTrasaction from "./components/AddTrasaction"
import { GlobalContextProvider } from "./context/GlobalState"
//mui stuff
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import themeObject from './util/theme'
//MUI
import { Grid, Divider } from "@material-ui/core"



const theme = createMuiTheme(themeObject);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <GlobalContextProvider>
      <div className='container'>
      <Header />
      <Divider/>
        <Grid container spacing={2}>
          <Grid item xs={6} alignContent='center' justify='center'>
           <IncomeExpenses />
          </Grid>
          <Grid item xs={6}>
            <Balance />
          </Grid>
        </Grid>
        <Divider/>
        <TransactionList />
        <AddTrasaction />
      </div>
    </GlobalContextProvider>
    </MuiThemeProvider>
  )
}

export default App
