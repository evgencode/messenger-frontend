import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import React from 'react'
import './index.scss'

const Groups = () => {
  return (
    <section className="groups flex-row">
      <AppBar position="static" className="header groups__header">
        <Toolbar>
          <div className="title-a">Группы</div>
        </Toolbar>
      </AppBar>
      <div className="scrollable">
        <p>1 Group</p>
        <p>2 Group</p>
        <p>3 Group</p>
        <p>4 Group</p>
      </div>
    </section>
  )
}

export default Groups
