import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import List from '@material-ui/core/List'
import Toolbar from '@material-ui/core/Toolbar'
import { Scrollbars } from 'react-custom-scrollbars'
import CommunityUserItem from './communityUserItem'
import './index.scss'

// Mock
import * as avatars from '../../../../images'
const languages = {
  native: 'RU',
  learns: ['EN', 'FR']
}
const i = 1

const Chat = () => {
  return (
    <section className="community">
      <div className="column-box column-box_full">
        <AppBar position="static" className="header community__header">
          <Toolbar>
            <div className="title-a">Community</div>
          </Toolbar>
        </AppBar>
        <div className="community__box">
          <Scrollbars>
            <List className="community__list">
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
            </List>
          </Scrollbars>
        </div>
      </div>
    </section>
  )
}

export default Chat
