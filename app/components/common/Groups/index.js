import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import GroupsList from './GroupsList'
import './index.scss'

const Groups = () => {
  return (
    <section className="groups">
      <AppBar position="static" className="header groups__header">
        <Toolbar>
          <div className="title-a">Группы</div>
        </Toolbar>
      </AppBar>
      <div className="scrollable">
        <Scrollbars>
          <GroupsList />
        </Scrollbars>
      </div>
    </section>
  )
}

export default Groups
