import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import ChatListDetails from './chatlistdetails/ChatListDetails'

const ChatList = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant='h6'
          color='primary'
          style={{ fontWeight: 'bold', marginTop: '20px' , marginLeft:'20px' }}
        >
          Messages
         </Typography>
      </Grid>

      <Grid item container>
        <div style={{ paddingTop: "13px" }}>
          <ChatListDetails />
        </div>
        <div style={{ paddingTop: "13px" }}>
          <ChatListDetails />
        </div>
        <div style={{ paddingTop: "13px" }}>
          <ChatListDetails />
        </div>
        <div style={{ paddingTop: "13px" }}>
          <ChatListDetails />
        </div>
        <div style={{ paddingTop: "13px" }}>
          <ChatListDetails />
        </div>
        <div style={{ paddingTop: "13px" }}>
          <ChatListDetails />
        </div>


      </Grid>
    </Grid>
  )
}

export default ChatList
