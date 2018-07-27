import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import Loader from '@components/common/Loader'

import './index.scss'

import Message from './Message'

const Chat = () => {
  return (
    <section className="chat flex-row">
      {/*<Loader />*/}
      <div className="column-box column-box_full">
        <AppBar position="static" className="header chat__header">
          <Toolbar>
            <div className="title-a">Chat #14589</div>
          </Toolbar>
        </AppBar>
        <div className="chat__box">
          <Scrollbars>
            <div className="top-divider" />
            <div className="chat__list list">
              {Array.from({ length: 14 }).map((n, i) => {
                return <Message out={i % 3 === 0} key={i} />
              })}
            </div>
          </Scrollbars>
        </div>
        <div className="chat__msg-new">NEW Message</div>
      </div>
    </section>
  )
}

export default Chat
