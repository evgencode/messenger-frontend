import PropTypes from 'prop-types'
import React from 'react'
import ArrowDown from '@material-ui/icons/KeyboardArrowDown'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import GroupIcon from '@material-ui/icons/Group'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Typography from '@material-ui/core/Typography'
import './index.scss'

const GroupsItem = ({ uuid, link, date, newMessages, name, label }) => {
  return (
    <ListItem button>
      <Typography
        variant="caption"
        color="textSecondary"
        classes={{ caption: 'groups-item__date' }}
      >
        {date}
      </Typography>
      {newMessages ? (
        <Badge
          badgeContent={10}
          color="secondary"
          classes={{ badge: 'groups-item__badge' }}
        >
          <Avatar classes={{ root: 'groups-item__avatar' }}>
            <GroupIcon />
          </Avatar>
        </Badge>
      ) : (
        <Avatar classes={{ root: 'groups-item__avatar' }}>
          <GroupIcon />
        </Avatar>
      )}
      <ListItemText
        primary={name}
        secondary={label}
        classes={{
          primary: 'nowrap-hidden',
          secondary: 'nowrap-hidden'
        }}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={e => console.log('IconButton')}>
          <ArrowDown />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

GroupsItem.propTypes = {
  uuid: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  newMessages: PropTypes.number,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default GroupsItem
