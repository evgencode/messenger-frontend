import Paper from '@material-ui/core/Paper'
import React from 'react'
import Groups from '@components/common/Groups'

import './index.scss'

const DesktopApp = () => {
  return (
    <div className="desktop-app">
      <Paper className="desktop-app__wrap">
        <Groups />
      </Paper>
    </div>
  )
}

export default DesktopApp
