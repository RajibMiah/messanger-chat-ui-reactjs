import React from 'react';
import moment from 'moment';
import PanelHead from './panelhead/PanelHead'
import './Message.css';

export default function Message(props) {
  const {
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp
  } = props;
  console.log(data)
  const friendlyTimestamp = moment(data.timestamp).format('LLLL');
  return (
    <div className={[
      'message',
      `${isMine ? 'mine' : ''}`,
      `${startsSequence ? 'start' : ''}`,
      `${endsSequence ? 'end' : ''}`
    ].join(' ')}>
      {
        showTimestamp &&
        <div>
          <div style = {{marginBottom:'25px' , marginTop:'15px'}}>
            <PanelHead />
          </div>
          <div className="timestamp">
            {friendlyTimestamp}
          </div>
        </div>
      }


      <div className="bubble-container">
        <div className="bubble" title={friendlyTimestamp}>
          
          {data.message}
        </div>
      </div>
    </div>
  );
}