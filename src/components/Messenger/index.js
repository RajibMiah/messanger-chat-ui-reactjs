import React from 'react';
// import ConversationList from '../ConversationList';
import ChatList from './chatlist/ChatList'
import MessageList from '../MessageList';
import ChatDetails from './chatdetails/ChatDetails'
import './Messenger.css';

export default function Messenger(props) {
    return (
      <div className="messenger">
        <div className="scrollable sidebar" style = {{width:'25%'}}>
          {/* <ConversationList /> */}
          <ChatList/>
        </div>
        <div className="scrollable content" style = {{width:'50%'}}>
          <MessageList />
        </div>
        <div style = {{width:'25%'}}>
           <ChatDetails/>
        </div>
      </div>
    );
}