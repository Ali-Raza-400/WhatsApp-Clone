import React from 'react';
import '../src/App.css'
import ChatBar from '../src/ChatBar';
import SideBar from '../src/SideBar';

function App() {
  return (
    <div>
      <div className='app'>
        <div className='app__body'>
          <SideBar />
          <ChatBar />
        </div>
      </div>
    </div>
  );
}

export default App;
