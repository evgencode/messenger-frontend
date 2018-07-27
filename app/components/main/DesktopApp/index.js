import Paper from '@material-ui/core/Paper'
import React from 'react'
import Groups from '@components/common/Groups'
import Chat from '@components/common/Chat'
import GroupInfo from '@components/common/GroupInfo'

import './index.scss'

const DesktopApp = () => {
  return (
    <Paper square className="desktop-app">
      <Groups />
      <Chat />
      <GroupInfo />
    </Paper>
  )
}

export default DesktopApp
