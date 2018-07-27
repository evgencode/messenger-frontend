import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import GroupsItem from './GroupsItem'
import './index.scss'

import { groupsItems } from '../../../mock_data'

const Groups = () => {
  return (
    <section className="groups flex-row">
      <AppBar position="static" className="header groups__header">
        <Toolbar>
          <div className="title-a">Группы</div>
        </Toolbar>
      </AppBar>
      <div className="scrollable">
        <Scrollbars>
          <List disablePadding className="list groups__list">
            {groupsItems.map((item, i) => <GroupsItem key={i} item={item} />)}
          </List>
        </Scrollbars>
      </div>
    </section>
  )
}

export default Groups
