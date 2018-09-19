import classNames from 'classnames/bind'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import GroupsList from './GroupsList/container'
import styles from './index.scss'

const cs = classNames.bind(styles)

const Groups = () => {
  return (
    <section className={cs('root')}>
      <AppBar position="static" className={cs('header')}>
        <Toolbar>
          <div className={cs('title')}>Chats</div>
        </Toolbar>
      </AppBar>
      <div className={cs('scrollable')}>
        <Scrollbars>
          <GroupsList />
        </Scrollbars>
      </div>
    </section>
  )
}

export default Groups
