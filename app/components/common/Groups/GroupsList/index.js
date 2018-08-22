import React, { Component } from 'react'
import List from '@material-ui/core/List'
import GroupsItem from './GroupsItem'

import { groupsItems } from '../../../../mock_data'

class GroupsList extends Component {
  groupClick = (uuid, link) => {
    this.props.navigateTo(link)
  }

  render() {
    return (
      <List disablePadding className="list groups-list">
        {groupsItems.map(({ uuid, link, date, newMessages, name, label }) => (
          <GroupsItem
            key={uuid}
            uuid={uuid}
            link={link}
            date={date}
            newMessages={newMessages}
            name={name}
            label={label}
            onClick={this.groupClick}
          />
        ))}
      </List>
    )
  }
}

export default GroupsList
