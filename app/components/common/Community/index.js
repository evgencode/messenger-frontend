import classNames from 'classnames/bind'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CommunityUserItem from './communityUserItem'
import styles from './index.scss'

const cs = classNames.bind(styles)

// Mock
import * as avatars from '../../../../images'
const languages = {
  native: 'RU',
  learns: ['EN', 'FR']
}

const Chat = () => {
  return (
    <section className={cs('root')}>
      <div className={cs('column-box')}>
        <AppBar position="static" className={cs('header')}>
          <Toolbar>
            <div className={cs('title')}>Community</div>
          </Toolbar>
        </AppBar>
        <div className={cs('scrollable')}>
          <Scrollbars>
            <ul className={cs('users-list')}>
              {[1, 2, 3, 4, 5].map(n => {
                return (
                  <CommunityUserItem
                    key={n}
                    name={`User_${n}`}
                    note={`Note_${n}`}
                    languages={languages}
                    avatar={avatars[`Ava${n}`]}
                    reviewsCount={n}
                  />
                )
              })}
            </ul>
          </Scrollbars>
        </div>
      </div>
    </section>
  )
}

export default Chat
