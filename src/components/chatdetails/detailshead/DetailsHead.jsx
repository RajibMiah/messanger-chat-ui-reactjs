import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { BsCheck, BsCheckAll } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'

const useStyles = makeStyles(theme => ({
  root: {

  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: '0 auto'
  },
  bottomLine: {
    borderBottom: '2px solid',
    borderColor: '#a8d4eb',
    width: "55%",
    margin: '0 auto',
    padding: '7px'
  }
}))

const PanelHead = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container style = {{marginTop:'2rem'}}>
        <Grid item xs={12}>
          <Avatar alt="Remy Sharp" src="/assets/chatImg.png" className={classes.large} />

        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Typography
              variant='h5'
              color='primary'
              style={{ fontWeight: 'bold' , textAlign:'center' }}
            >
              Console-IT
            </Typography>
          </Grid>
          <Grid item container >
            <Grid item xs={12} style={{ display: 'flex' , justifyContent:'center' }}>
              <ImLocation2 style={{ fontSize: '20px', marginRight: '5px' }} />
              <Typography
                variant='body1'
                color='primary'
                style={{ fontWeight: 'bold', textAlign: 'start' }}
              >
                Your Road,City , Country
          </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* border bottom line */}
      <div className={classes.bottomLine} ></div>
    </>

  )
}

export default PanelHead