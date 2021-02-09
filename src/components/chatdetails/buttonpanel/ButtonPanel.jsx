import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Controls from '../../../controls/controls'

const useStyles = makeStyles(theme=>({
  root:{
     marginTop:'45px'
  },
  btnContainer:{
    display: 'flex', 
    justifyContent: 'center',
  },
  btn:{
    borderRadius: '25px', 
    height: "35px",
    width: '60%'
  },
  notIntBtn:{
    borderRadius: '25px', 
    height: "35px",
    width: '60%',
    border:"1px solid",
    borderColor: theme.palette.primary.main,
    backgroundColor:"none !important"
  }
}))
const ButtonPanel = () => {
  const classes = useStyles()
  return (
    <Grid container className = {classes.root}>
      <Grid item xs={12} className = {classes.btnContainer}>
        <Controls.Button
          text='Get Quote'
          color = 'primary'
          className = {classes.btn}
        />
      </Grid>
      <Grid item xs={12} className = {classes.btnContainer}>
        <Controls.Button
          text='Get Schedule'
          color = 'primary'
          className = {classes.btn}
        />
      </Grid>
      <Grid item xs={12} className = {classes.btnContainer}>
        <Controls.Button
          text='Field Invigilate'
          color = 'primary'
          className = {classes.btn}
        />
      </Grid>
      <Grid item xs={12} className = {classes.btnContainer}>
        <Controls.Button
          text='Not Interested'
          color = 'default'
          className = {classes.notIntBtn}
        />
      </Grid>
    </Grid>
  )
}

export default ButtonPanel
