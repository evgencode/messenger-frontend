import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'

/**
 * Icons
 */
import GroupIcon from '@material-ui/icons/Group'
import ArrowDown from '@material-ui/icons/KeyboardArrowDown'

const styles = theme => {
  return {
    Action: {
      transform: 'translateY(-30%)'
    },

    ActionsIcon: {
      fontSize: '28px'
    },

    linearText: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },

    date: {
      position: 'absolute',
      right: '4%',
      top: '6%'
    },

    badge: {
      fontSize: '0.7rem',
      transform: 'scale(0.9)',
      top: '-10px',
      right: '-10px'
    }
  }
}

const tmpLinks = [
  '',
  'fgn54yu',
  '',
  'uut789jk8',
  '',
  'nm7423ghuj',
  '',
  '654ty562rw'
]

class GroupsListItem extends Component {
  render() {
    const { item } = this.props

    const { Action, ActionsIcon, linearText, date, badge } = this.props.classes

    return (
      <ListItem divider component="li" className="list__item groups__list-item">
        <Link to={this.props.link || '/'} className="groups__list-item-link" />
        {item._new ? (
          <Badge
            badgeContent={item._new}
            color="secondary"
            classes={{ badge: badge }}
          >
            <Avatar>
              <GroupIcon />
            </Avatar>
          </Badge>
        ) : (
          <Avatar>
            <GroupIcon />
          </Avatar>
        )}
        <ListItemText
          primary={item.primary}
          secondary={item.secondary}
          classes={{ primary: linearText, secondary: linearText }}
        />
        <ListItemSecondaryAction className={Action}>
          <IconButton>
            <ArrowDown className={ActionsIcon} />
          </IconButton>
        </ListItemSecondaryAction>
        <Typography variant="caption" color="textSecondary" className={date}>
          {item.date}
        </Typography>
      </ListItem>
    )
  }
}

export default withStyles(styles)(GroupsListItem)
