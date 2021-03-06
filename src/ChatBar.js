import { AttachFile, InsertEmoticon, Mic, SearchOutlined } from '@mui/icons-material';
import MoreVert from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import React from 'react';
import './Chat.css';
function ChatBar() {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
          <h3>Room Name</h3>
          <p>last scene</p>
        </div>
        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        <p className='chat__message'>
          <span className='chat__name'> Ali</span>I am Messaging
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message chat_reciever'>
          <span className='chat__name'> Ali</span>I am Messaging
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message'>
          <span className='chat__name'> Ali</span>I am Messaging
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
          <InsertEmoticon/>
          <form   >
              <input type="text" placeholder="Type a Message" />
              <button type="submit"> Send a message</button>
          </form>
          <Mic/>
      </div>
    </div>
  );
}

export default ChatBar;
