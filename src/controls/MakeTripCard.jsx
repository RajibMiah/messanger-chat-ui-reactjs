import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import PlaneImg from '../Assets/plane.png'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '25px',
    paddingLeft: '5px',
    paddingBottom: '3px',
    position: 'sticky',
     top: "0px",
     
    
  },
  paper: {
    position:'relative',
    left:'2rem',
    border: '3px solid ',
    borderColor: '#22A301',
    borderRadius: '10px',
    backgroundImage: `url(${PlaneImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repate',
    backgroundPosition: 'bottom',
    '& .MuiInputBase-root': {
      borderRadius: '10px',
      height: '50px',

    },
    '& .MuiTextField-root': {
      width: '90%'
    },
    '& Button:focus': {
      outline: 'none !important',
      // outline: 'none !important',
    },
  },
  header: {
    textAlign: 'center',
    paddingTop: '25px',
    fontWeight: 'bold'
  },
}))

const MakeTripCard = (props) => {
  const classes = useStyles()
  return (
    <div className ={classes.root}>
      <div className={classes.paper}>
        <Grid item xs={12}>
          <Typography variant='h5' color='primary' className={classes.header}>
            {props.title}
        </Typography>
        </Grid>
        {props.children}
      </div>
    </div>

  )
}

export default MakeTripCard
