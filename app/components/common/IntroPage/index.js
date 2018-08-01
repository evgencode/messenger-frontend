import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'

import './index.scss'

const Chat = () => {
  return (
    <section className="intro">
      <div className="column-box column-box_full">
        <AppBar position="static" className="header intro__header">
          <Toolbar>
            <div className="title-a">Welcome to Evgen Chat</div>
          </Toolbar>
        </AppBar>
        <div className="intro__page">
          <div className="chat__list list">Welcome to Evgen Chat</div>
        </div>
      </div>
    </section>
  )
}

export default Chat
