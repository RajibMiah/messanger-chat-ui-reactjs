import React from 'react';
// import ConversationList from '../ConversationList';
import Chatlist from '../chatlist/ChatList'
import MessageList from '../MessageList';
import ChatDetails from '../chatdetails/ChatDetails'
import './Messenger.css';

export default function Messenger(props) {
    return (
      <div className="messenger">
        {/* <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        /> */}

        {/* <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        /> */}

        <div className="scrollable sidebar">
          {/* <ConversationList /> */}
          <Chatlist/>
        </div>

        <div className="scrollable content">
          <MessageList />
        </div>
        <div>
          <ChatDetails/>
        </div>
      </div>
    );
}