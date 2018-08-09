import React, { Component } from 'react'
import List from '@material-ui/core/List'
import GroupsItem from './GroupsItem'

import { groupsItems } from '../../../../mock_data'

class GroupsList extends Component {
  render() {
    return (
      <List disablePadding className="list groups-list">
        <GroupsItem item={groupsItems[0]} link={'/'} newMessages={6} />
        <GroupsItem item={groupsItems[1]} link={'/chat/uuid/info'} />
        <GroupsItem item={groupsItems[2]} link={'/chat/uuid'} />
        <GroupsItem item={groupsItems[3]} link={'/'} newMessages={22} />
        <GroupsItem item={groupsItems[4]} link={'/chat/uuid/info'} />
        <GroupsItem item={groupsItems[5]} link={'/chat/uuid'} />
      </List>
    )
  }
}

export default GroupsList
