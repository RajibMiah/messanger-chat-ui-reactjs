import { Paper } from '@material-ui/core';
import React from 'react';
import './Compose.css';

export default function Compose(props) {
  return (
    <Paper>
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
        />
        <div style = {{position:'relative' , right:'30%'}}>
          {
            props.rightItems
          }
        </div>

      </div>
    </Paper>

  );
}