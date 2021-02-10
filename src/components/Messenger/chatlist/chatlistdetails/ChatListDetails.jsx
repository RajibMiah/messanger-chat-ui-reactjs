import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { BsCheck, BsCheckAll } from 'react-icons/bs'

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

const ChatListDetails = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <Avatar alt="Remy Sharp" src="/assets/chatImg.png" className={classes.large} />

        </Grid>
        <Grid item container xs={8}>
          <Grid item container >
            <Grid item xs={6}>
              <Typography
                variant='h6'
                color='primary'
                style={{ fontWeight: 'bold' }}
              >
                Console-IT
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant='subtitle2'
                style={{ textAlign: 'end', paddingTop: '6px' , paddingRight:'13px' }}
              >
                09:05 pm
              </Typography>
            </Grid>
          </Grid>
          <Grid item container >
            <Grid item xs={2} style={{ display: 'flex', alignItems: 'center' }}>
              <BsCheck style={{ fontSize: '25px' }} />
              {/* <BsCheckAll/> */}
            </Grid>
            <Grid item xs>
              <Typography
                variant='subtitle2'
                style = {{ fontFamily:'ui-sans-serif' }}

              >
                Lorem ipsum, or lipsum as it is sometimes sometimes...
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

export default ChatListDetails
