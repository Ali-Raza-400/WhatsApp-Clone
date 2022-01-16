import React from 'react';
import './Sidebar.css';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
          <Avatar src='https://avatars.githubusercontent.com/u/80849102?v=4' />
        <div className='sidebar_headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
          <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
    {/* Search Bar Code  */}
      <div className="sidebar__search">
          <div className="sidebar__searchContainer">
              <SearchOutlined/>
              <input  placeholder="Type Some Text" type="text" />
          </div>
      </div>
      <div className="sidebar__chats">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />

      </div>
    </div>
  );
}

export default SideBar;
