import classNames from 'classnames/bind'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Loader from '@components/common/Loader'
import styles from './index.scss'

const cs = classNames.bind(styles)

const GroupInfo = () => {
  return (
    <section className={cs('root')}>
      {/*<Loader opaque />*/}
      <div className={cs('column-box')}>
        <AppBar position="static" className={cs('header')}>
          <Toolbar>
            <div className={cs('title')}>Информация о группе </div>
          </Toolbar>
        </AppBar>

        <div className={cs('scrollable')}>
          <Scrollbars>
            <Paper className={cs('block')}>
              <Avatar alt="group ava" src="/static/chat-icon.png" className={cs('group-ava')} />
              <div className={cs('group-name', 'title')}>Task № 12345</div>
            </Paper>
          </Scrollbars>
        </div>
      </div>
    </section>
  )
}

export default GroupInfo
