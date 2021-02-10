import { Grid } from '@material-ui/core'
import React from 'react'
import ButtonPanel from './buttonpanel/ButtonPanel'
import DetailsHead from './detailshead/DetailsHead'
import WorkInfo from './Work-Information/WorkInfo'

const ChatDetails = () => {
  return (
   <Grid container>
     <Grid item xs = {12}>
        <DetailsHead/>
     </Grid>
     <Grid item xs = {12}>
       <WorkInfo/>
     </Grid>
     <Grid item xs = {12}>
       <ButtonPanel/>
     </Grid>
   </Grid>
  )
}

export default ChatDetails
