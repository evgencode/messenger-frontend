import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import GroupIcon from '@material-ui/icons/Group'
import IconButton from '@material-ui/core/IconButton'
import ArrowDown from '@material-ui/icons/KeyboardArrowDown'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import styles from './index.scss'

const cs = classNames.bind(styles)

const GroupsItem = ({ uuid, link, date, newMessages, name, label, onClick }) => {
  return (
    <ListItem button onClick={() => onClick(uuid, link)}>
      <Typography variant="caption" color="textSecondary" classes={{ caption: cs('date') }}>
        {date}
      </Typography>
      {newMessages ? (
        <Badge badgeContent={10} color="secondary" classes={{ badge: cs('badge') }}>
          <Avatar classes={{ root: cs('avatar') }}>
            <GroupIcon />
          </Avatar>
        </Badge>
      ) : (
        <Avatar classes={{ root: cs('avatar') }}>
          <GroupIcon />
        </Avatar>
      )}
      <ListItemText
        primary={name}
        secondary={label}
        classes={{
          primary: cs('nowrap-hidden'),
          secondary: cs('nowrap-hidden')
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
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default GroupsItem
