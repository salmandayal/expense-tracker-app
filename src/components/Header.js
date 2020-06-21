import React from "react"
import { Typography } from "@material-ui/core"
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div className="heading">
      <img src={logo} alt="logo"/>
      <Typography variant='h4' color='primary' align='center' >Expenser</Typography>
    </div>
  )
}

export default Header
