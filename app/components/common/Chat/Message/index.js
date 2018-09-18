import classNames from 'classnames/bind'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import styles from './index.scss'

const cs = classNames.bind(styles)

const Message = props => {
  const { out } = props
  return (
    <div className={cs('root')}>
      <Paper elevation={1} classes={{ root: out ? cs('message-out') : cs('message-in') }} className={cs('message')}>
        One of its primary use cases is to make dynamic and conditional className props simpler to work with. So where
        you may have the following code to generate a className prop for a in React
      </Paper>
    </div>
  )
}

export default Message
