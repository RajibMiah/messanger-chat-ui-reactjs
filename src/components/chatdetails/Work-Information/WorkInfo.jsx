import React from 'react'
import { Avatar, Box, Grid, makeStyles, Typography } from '@material-ui/core'
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
    width: "85%",
    margin: '0 auto',
    padding: '7px'
  },
  rootStyle: {
    fontWeight: 'bold',
    paddingTop: '13px',
    justifyContent:'center',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'inherit'
    },
  },
  nameWidth: {
    width: '33%',
    textAlign:'center',
    color: theme.palette.primary.main
  },
  nameSpan: {
    paddingLeft: '5px',
    paddingRight: '5px'
  }
}))
const WorkInfo = () => {
  const classes = useStyles()
  return (
    <Grid item container xs={12} style={{ marginTop: '25px' }}>
      <Grid item xs={12}>
        <Typography
          variant='h5'
          color='primary'
          style={{ fontWeight: 'bold', textAlign: 'center' }}
        >
          Work Information
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.rootStyle}>
        <Box className={classes.nameWidth}>
          Work Id
        </Box>
        <Box component='span' className={classes.nameSpan}>:</Box>
        <Typography
          variant='subtitle2'
          color='primary'
        >
          1715987654345
       </Typography>
      </Grid>

      <Grid item xs={12} className={classes.rootStyle}>
        <Box className={classes.nameWidth}>
          Posted Date
        </Box>
        <Box component='span' className={classes.nameSpan}>:</Box>
        <Typography
          variant='subtitle2'
          color='primary'
        >
         18.12.2020
       </Typography>
      </Grid>
    </Grid>
  )
}

export default WorkInfo
