import classNames from 'classnames/bind'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import GroupsList from './GroupsList/container'
import styles from './index.scss'
import commonStyles from '@styles/common.scss'

const cs = classNames.bind(styles)
const cx = classNames.bind(commonStyles)

const Groups = () => {
  return (
    <section className={cs('root')}>
      <AppBar position="static">
        <Toolbar>
          <div className={cx('header')}>Chats</div>
        </Toolbar>
      </AppBar>
      <div className={cx('scrollable')}>
        <Scrollbars>
          <GroupsList />
        </Scrollbars>
      </div>
    </section>
  )
}

export default Groups
