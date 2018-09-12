import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import AppBar from '@material-ui/core/AppBar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'
import { Scrollbars } from 'react-custom-scrollbars'
import './index.scss'

import { Ava1, Ava2, Ava3, Ava4, Ava5, Ava6 } from '../../../../images'

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
            <div className="community__list list">
              <List>
                <ListItem>
                  <Avatar>
                    <img src={Ava1} style={{ width: '100%' }} />
                  </Avatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <img src={Ava2} style={{ width: '100%' }} />
                  </Avatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <img src={Ava3} style={{ width: '100%' }} />
                  </Avatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <img src={Ava4} style={{ width: '100%' }} />
                  </Avatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <img src={Ava5} style={{ width: '100%' }} />
                  </Avatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <img src={Ava6} style={{ width: '100%' }} />
                  </Avatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
              </List>
            </div>
          </Scrollbars>
        </div>
      </div>
    </section>
  )
}

export default Chat
