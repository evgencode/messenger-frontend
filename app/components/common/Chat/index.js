import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import './index.scss'

const Chat = () => {
  return (
    <section className="chat flex-row">
      <AppBar position="static" className="header chat__header">
        <Toolbar>
          <div className="title-a">Chat № 12345</div>
        </Toolbar>
      </AppBar>
      <div className="chat__box">
        <p>1 Dialog</p>
        <p>2 Dialog</p>
        <p>3 Dialog</p>
        <p>4 Dialog</p>
      </div>
    </section>
  )
}

export default Chat
