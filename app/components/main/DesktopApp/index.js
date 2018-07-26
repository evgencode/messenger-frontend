import React from 'react'
import Groups from '@components/common/Groups'
import Chat from '@components/common/Chat'
import GroupInfo from '@components/common/GroupInfo'

import './index.scss'

const DesktopApp = () => {
  return (
    <div className="desktop-app">
      <Groups />
      <Chat />
      <GroupInfo />
    </div>
  )
}

export default DesktopApp
