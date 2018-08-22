import Paper from '@material-ui/core/Paper'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import './index.scss'

const styles = theme => {
  return {
    messageIn: {
      float: 'left'
    },

    messageOut: {
      backgroundColor: theme.palette.primary[200],
      float: 'right'
    }
  }
}

const Message = props => {
  const { out } = props
  const { messageIn, messageOut } = props.classes

  return (
    <div className="chat__list-item list__item">
      <Paper elevation={1} classes={{ root: out ? messageOut : messageIn }} className="message">
        One of its primary use cases is to make dynamic and conditional className props simpler to work with. So where
        you may have the following code to generate a className prop for a in React
      </Paper>
    </div>
  )
}

export default withStyles(styles)(Message)
