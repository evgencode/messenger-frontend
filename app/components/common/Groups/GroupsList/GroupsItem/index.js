import PropTypes from 'prop-types'
import React from 'react'
import ArrowDown from '@material-ui/icons/KeyboardArrowDown'
import classNames from 'classnames/bind'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import GroupIcon from '@material-ui/icons/Group'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
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
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default GroupsItem
