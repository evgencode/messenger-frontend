import classNames from 'classnames/bind'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import Loader from '@components/common/Loader'
import styles from './index.scss'

const cs = classNames.bind(styles)

import Message from './Message'

const Chat = () => {
  return (
    <section className={cs('root')}>
      {/*<Loader />*/}
      <div className={cs('column-box', 'column-box_full')}>
        <AppBar position="static" className={cs('header')}>
          <Toolbar>
            <div className={cs('title-a')}>Chat #14589</div>
          </Toolbar>
        </AppBar>
        <div className={cs('chat-box')}>
          <Scrollbars>
            <div className={cs('top-divider')} />
            <div className={cs('chat-list')}>
              {Array.from({ length: 14 }).map((n, i) => {
                return <Message out={i % 3 === 0} key={i} />
              })}
            </div>
          </Scrollbars>
        </div>
        <div className={cs('new-message')}>NEW Message</div>
      </div>
    </section>
  )
}

export default Chat
