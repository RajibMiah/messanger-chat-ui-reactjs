import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
// import { BsCheck, BsCheckAll } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'

const useStyles = makeStyles(theme => ({
  root: {

  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    margin: '0 auto'
  },
  bottomLine: {
    borderBottom: '2px solid',
    borderColor: '#a8d4eb',
    width: "85%",
    margin: '0 auto',
    padding: '7px'
  }
}))

const PanelHead = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Avatar alt="Remy Sharp" src="/assets/chatImg.png" className={classes.large} />

        </Grid>
        <Grid item container xs={8}>
          <Grid item xs={12}>
            <Typography
              variant='h6'
              color='primary'
              style={{ fontWeight: 'bold' }}
            >
              Console-IT
              </Typography>
          </Grid>
          <Grid item container >
            <Grid item xs={12} style={{ display: 'flex' }}>
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
      {/* <div className={classes.bottomLine} ></div> */}
    </>

  )
}

export default PanelHead