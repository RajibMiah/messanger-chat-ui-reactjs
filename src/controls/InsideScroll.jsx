
import React from 'react'
import { Grid, GridList, makeStyles } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
  TrandingRoot: {
    paddingTop: '0px !important',
    paddingLeft: '10px !important',
    paddingRight: '10px !imortant',
    height: '18rem',
    // height: 'calc(94rem + 10px)'
  },
}))

const InsideScroll = (props) => {

  const classes = useStyle()
  return (
    <GridList className={props.gridList} cols={1} >
      <Grid item xs container className={classes.TrandingRoot} >
        {props.children}
      </Grid>
    </GridList>
  )
}

export default InsideScroll
