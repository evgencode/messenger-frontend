import PropTypes from 'prop-types'
import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './index.scss'

const CommunityUserItem = ({ avatar, languages, name, note, reviewsCount }) => {
  return (
    <ListItem className="community-item">
      <Avatar className="community-item__avatar">
        <img src={avatar} style={{ width: '100%' }} />
      </Avatar>
      <ListItemText
        primary={name}
        secondary={note}
        classes={{
          primary: 'community-item__name',
          secondary: 'community-item__note'
        }}
      />
    </ListItem>
  )
}

CommunityUserItem.propTypes = {
  avatar: PropTypes.node.isRequired,
  languages: PropTypes.shape({
    native: PropTypes.string,
    learns: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  name: PropTypes.string.isRequired,
  note: PropTypes.string,
  reviewsCount: PropTypes.number
}

export default CommunityUserItem
