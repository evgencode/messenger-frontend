import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './index.scss'

const cs = classNames.bind(styles)

const CommunityUserItem = ({ avatar, isOnline, languages, name, note, reviewsCount }) => {
  console.log(languages)
  return (
    <li className={cs('root')}>
      <div className={cs('avatar')}>
        <img src={avatar} className={cs('photo')} />
      </div>
      <div className={cs('info')}>
        <div className={cs('header')}>
          <div className={cs('status', isOnline ? 'online' : 'offline')} />
          <div className={cs('user-name')}>{name}</div>
          <div className={cs('reviews-count')}>{reviewsCount}</div>
        </div>
        <div className={cs('note')}>{note}</div>
        <div className={cs('languages')}>{JSON.stringify(languages)}</div>
      </div>
    </li>
  )
}

CommunityUserItem.propTypes = {
  avatar: PropTypes.node.isRequired,
  isOnline: PropTypes.bool,
  languages: PropTypes.shape({
    native: PropTypes.string,
    learns: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  name: PropTypes.string.isRequired,
  note: PropTypes.string,
  reviewsCount: PropTypes.number
}

export default CommunityUserItem
