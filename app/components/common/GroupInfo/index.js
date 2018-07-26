import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import './index.scss'

const GroupInfo = () => {
  return (
    <section className="group flex-row">
      <AppBar position="static" className="header group__header">
        <Toolbar>
          <div className="title-1">Информация о группе</div>
        </Toolbar>
      </AppBar>
      <div className="group-info">
        <p>Group Info</p>
        <p>Group Info</p>
        <p>Group Info</p>
        <p>Group Info</p>
      </div>
    </section>
  )
}

export default GroupInfo
