import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import './index.scss'

const GroupInfo = () => {
  return (
    <section className="group">
      {/* <Loader />*/}
      <div className="column-box column-box_full">
        <AppBar position="static" className="header group__header">
          <Toolbar>
            <div className="title-a">Информация о группе </div>
          </Toolbar>
        </AppBar>

        <div className="group-info">
          <Scrollbars>
            <Paper className="block group__block">
              <Avatar
                alt="group ava"
                src="/static/chat-icon.png"
                className="group__ava"
              />
              <div className="block__item group__name title-a">
                Task № 12345
              </div>
            </Paper>
          </Scrollbars>
        </div>
      </div>
    </section>
  )
}

export default GroupInfo
