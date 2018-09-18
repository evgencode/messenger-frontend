import PropTypes from 'prop-types'
import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './index.scss'

const CommunityUserItem = ({ avatar, languages, name, note, reviewsCount }) => {
  return (
    <li className="community-item list__item">
      <div className="community-item__avatar">
        <img src={avatar} style={{ width: '100%' }} />
      </div>
      <div className="community-item__info">
        <div className="community-item__header">
          HHHH
        </div>
      </div>
    </li>
  )
}
/**
 * <ListItemText
 primary={name}
 secondary={note}
 classes={{
          primary: 'community-item__name',
          secondary: 'community-item__note'
        }}
 />
 */

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
